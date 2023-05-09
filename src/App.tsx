import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { PanelSelectedGood } from './components/PanelSelectedGood';
import { PanelGoods } from './components/PanelGoods';
import { PanelStorage } from './components/PanelStorage';
import {
  IExpeditionInfoInProcess,
  IMine,
  IOrder,
  ISkillLvl,
  IStorageGood,
  IWorker,
  TPage,
} from './types';
import { PanelOrders } from './components/PanelOrders';
import { dictionary } from './dictionary';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import { PageMine } from './components/PageMine';
import { useFonts } from 'expo-font';
import { PageOrders } from './components/PageOrders';
import 'react-native-get-random-values';
import { CustomText } from './components/CustomText';
import { useCustomerOrdersLogic } from './hooks/useCustomerOrdersLogic';
import { hasEnoughResourcesToImproveMine } from './utils';
import { PageCity } from './components/PageCity';
import { Menu } from './components/Menu';
import { PageMapCity } from './components/PageMapCity';
import { useLiberateCityLogic } from './hooks/useLiberateCityLogic';
import { PageHero } from './components/PageHero';
import { PageEditor } from './components/PageEditor';

export const App = () => {
  const [page, setPage] = useState<TPage>('editor');
  const [mineLvl, setMineLvl] = useState(1);
  const [money, setMoney] = useState(5000);
  const [maxOrdersQty, setMaxOrdersQty] = useState(5);
  const [expeditionInfo, setExpeditionInfo] =
    useState<IExpeditionInfoInProcess>({} as IExpeditionInfoInProcess);

  const [loaded] = useFonts({
    LGGothic: require('./fonts/LGGothic.ttf'),
  });

  const [experience, setExperience] = useState(100);
  const [learnedSkillIds, setLearnedSkillIds] = useState([1, 4]);
  const [lvl, setLvl] = useState(1);
  const [expNextLvl, setExpNextLvl] = useState(
    dictionary.heroLvls[lvl - 1].experience,
  );

  const [availableSkillPoints, setAvailableSkillPoints] = useState(2);

  const [selectedGoodId, setSelectedGoodId] = useState<number>(2);
  const [storage, setStorage] = useState<IStorageGood[]>([
    {
      id: 1,
      qty: 20,
    },
    {
      id: 2,
      qty: 20,
    },
    {
      id: 3,
      qty: 5,
    },
    {
      id: 11,
      qty: 1,
    },
    {
      id: 12,
      qty: 2,
    },
    {
      id: 13,
      qty: 1,
    },
    {
      id: 30,
      qty: 1,
    },
    {
      id: 31,
      qty: 1,
    },
    {
      id: 32,
      qty: 1,
    },
    {
      id: 33,
      qty: 1,
    },
    {
      id: 34,
      qty: 1,
    },
    {
      id: 35,
      qty: 1,
    },
    {
      id: 36,
      qty: 1,
    },
    {
      id: 37,
      qty: 1,
    },
    {
      id: 38,
      qty: 1,
    },
    {
      id: 39,
      qty: 1,
    },
  ]);

  const addExperience = (expQty: number) => {
    setExperience((prevState) => {
      return prevState + expQty;
    });
  };

  const orderId = useRef(1);

  const [orders, setOrders] = useState<IOrder[]>([]);

  useEffect(() => {
    createOrder(2, 10);
    createOrder(3, 2);
    createOrder(3, 1);
    createOrder(3, 1);
    createOrder(3, 1);
    createOrder(3, 1);
  }, []);

  useEffect(() => {
    const workerIds = orders
      .filter((order) => order.workerId)
      .map((order) => order.workerId);
    const ordersWithoutWorker = orders.filter((order) => !order.workerId);

    const restedWorkerIds = workers
      .filter((worker) => !workerIds.includes(worker.id))
      .map((worker) => worker.id);

    if (ordersWithoutWorker.length && restedWorkerIds) {
      setOrders((prevOrders) => {
        return [...prevOrders].map((order) => {
          if (!order.workerId && restedWorkerIds.length) {
            order.workerId = restedWorkerIds.shift();
          }

          return order;
        });
      });
    }
  }, [orders.length]);

  const [workers, setWorkers] = useState<IWorker[]>([
    {
      id: 1,
      name: 'You',
      orderId: null,
    },
    {
      id: 2,
      name: 'Worker',
      orderId: null,
    },
    {
      id: 3,
      name: 'Worker2',
      orderId: null,
    },
  ]);

  const timer = useRef();
  const isExpeditionInProcess = useRef(false);

  useEffect(() => {
    // @ts-ignore
    timer.current = setInterval(handleTimer, 1000);

    return () => {
      clearInterval(timer.current);
    };
  }, []);

  const updateOrders = () => {
    setOrders((prevOrders) => {
      let newOrders = [...prevOrders];

      newOrders = newOrders
        .map((order) => {
          if (order.workerId) {
            order.timeLeft = order.timeLeft - 1;

            if (order.timeLeft === 0) {
              order.qty = order.qty - 1;

              if (order.qty > 0) {
                order.timeLeft =
                  dictionary.goods.find((good) => good.id === order.goodId)
                    ?.time || 0;
              }

              addToStorage(order.goodId, 1);
            }
          }

          return order;
        })
        .filter((order) => order.timeLeft > 0);

      return newOrders;
    });
  };

  const addMoney = (amount: number) => {
    setMoney((prevState) => {
      return prevState + amount;
    });
  };

  const removeFromStorage = (goodId: number, qty: number) => {
    setStorage((prevStorage) => {
      let newStorage = [...prevStorage];
      const index = newStorage.findIndex(
        (storageItem) => storageItem.id === goodId,
      );

      if (index > -1) {
        // update qty
        newStorage[index].qty -= qty;

        if (newStorage[index].qty < 0) {
          newStorage[index].qty = 0;
        }
      } else {
        // add new storage item
        newStorage.push({
          id: goodId,
          qty: qty,
        });
      }

      return newStorage;
    });
  };

  const { updateCustomerOrders, completeCustomerOrder, customerOrders } =
    useCustomerOrdersLogic({
      storage,
      removeFromStorage,
      addMoney,
      addExperience,
    });

  const { liberatedCityIds, liberateCity } = useLiberateCityLogic({
    storage,
    removeFromStorage,
    addExperience,
  });

  const handleTimer = () => {
    updateOrders();
    updateCustomerOrders();

    if (isExpeditionInProcess.current) {
      updateExpedition();
    }
  };

  const updateExpedition = () => {
    setExpeditionInfo((prevState) => {
      const newExpeditionInfo = { ...prevState };
      newExpeditionInfo.duration -= 1;

      if (newExpeditionInfo.duration === 0) {
        isExpeditionInProcess.current = false;

        getGoodsFromExpedition(newExpeditionInfo);
      }

      return newExpeditionInfo;
    });
  };

  const getGoodsFromExpedition = (expedition: IExpeditionInfoInProcess) => {
    expedition.canBeFoundGoods.map((good) => {
      addToStorage(good.id, good.qty);
    });
  };

  const createOrder = (id: number, qty: number) => {
    const item = dictionary.goods.find((good) => good.id === id);

    if (item && orders.length < maxOrdersQty) {
      setOrders((prevOrders) => {
        orderId.current += 1;

        return [
          ...prevOrders,
          {
            goodId: id,
            qty,
            timeLeft: item.time,
            timePerItem: item.time,
            orderId: orderId.current,
            workerId: null,
          },
        ];
      });

      setStorage((prevStorage) => {
        const newStorage = [...prevStorage];

        item.requirements.resources.forEach((requiredResource) => {
          const indexInStorage = storage.findIndex(
            (item) => item.id === requiredResource.id,
          );

          newStorage[indexInStorage].qty -= requiredResource.qty;
        });

        return newStorage;
      });
    }
  };

  const addToStorage = (goodId: number, qty: number) => {
    setStorage((prevStorage) => {
      let newStorage = [...prevStorage];
      const index = newStorage.findIndex(
        (storageItem) => storageItem.id === goodId,
      );

      if (index > -1) {
        // update qty
        newStorage[index].qty += qty;
      } else {
        // add new storage item
        newStorage.push({
          id: goodId,
          qty: qty,
        });
      }

      return newStorage;
    });
  };

  const onChangeGoodId = useCallback((id: number) => setSelectedGoodId(id), []);
  const onCreateOrder = useCallback(createOrder, [orders.length]);

  const onBuyGood = (goodId: number, qty: number) => {
    const item = dictionary.goods.find((good) => good.id === goodId)!;
    const needMoney = item.cost * qty;

    if (money >= needMoney) {
      setMoney((prevMoney) => {
        return prevMoney - needMoney;
      });

      addToStorage(goodId, qty);
    }
  };

  const onImproveMine = () => {
    const mineInfo = dictionary.mine.find(
      (mine) => mine.nextLvl === mineLvl + 1,
    );

    if (mineInfo) {
      if (hasEnoughResourcesToImproveMine(mineInfo, storage, money)) {
        improveMine();

        mineInfo.requirements.resources.forEach((resource) => {
          removeFromStorage(resource.id, resource.qty);
        });

        addMoney(-mineInfo.requirements.money);
      }
    }
  };

  const improveMine = () => {
    setMineLvl((prevState) => {
      return prevState + 1;
    });
  };

  const sendExpedition = (mine: IMine) => {
    if (money >= mine.expedition.cost) {
      addMoney(-mine.expedition.cost);

      isExpeditionInProcess.current = true;

      setExpeditionInfo({
        duration: mine.expedition.duration,
        mineLvl: mine.nextLvl,
        canBeFoundGoods: mine.expedition.canBeFoundGoods,
      });
    }
  };

  const learnSkill = (skill?: ISkillLvl) => {
    if (
      skill &&
      !learnedSkillIds.includes(skill.skillId) &&
      availableSkillPoints
    ) {
      // learn new skill
      setLearnedSkillIds((prevState) => {
        return [...prevState, skill.skillId];
      });

      addMoney(-skill.requirements.money);
      setAvailableSkillPoints((prevState) => {
        return prevState - 1;
      });
    }
  };

  useEffect(() => {
    // TODO: calculate all params
    console.log('recalculate abilities');
  }, [learnedSkillIds]);

  // TODO: refactor code, separate to hooks

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.appWrapper}>
      <StatusBar style="auto" />

      <SHeaderBlock>
        <SSomePoint>
          <CustomText>{experience}</CustomText>
        </SSomePoint>
        <SHeader>Forge God</SHeader>
        <SMoneyWrapper>
          <SImage source={require('./images/gold.png')} />
          <SMoney>{money}</SMoney>
        </SMoneyWrapper>
      </SHeaderBlock>

      <View style={styles.appContent}>
        {page === 'forge' && (
          <>
            <View style={styles.forgeBlock}>
              <View style={styles.columnLeft}>
                <PanelOrders orders={orders} maxOrdersQty={maxOrdersQty} />
              </View>
              <View style={styles.columnRight}>
                <View style={styles.orderBlock}>
                  <PanelSelectedGood
                    canOrder={orders.length < maxOrdersQty}
                    storage={storage}
                    goodId={selectedGoodId}
                    onCreateOrder={onCreateOrder}
                  />
                </View>
                <PanelGoods
                  onChangeGoodId={onChangeGoodId}
                  selectedGoodId={selectedGoodId}
                />
              </View>
            </View>

            <PanelStorage storage={storage} />
          </>
        )}

        {page === 'mine' && (
          <PageMine
            dictionary={dictionary.mine}
            mineLvl={mineLvl}
            onBuyGood={onBuyGood}
            onImproveMine={onImproveMine}
            storage={storage}
            money={money}
            isExpeditionInProcess={isExpeditionInProcess.current}
            sendExpedition={sendExpedition}
          />
        )}

        {page === 'orders' && (
          <PageOrders
            dictionary={dictionary.mine}
            storage={storage}
            orders={customerOrders}
            onCompleteOrder={(orderId: string) => {
              completeCustomerOrder(orderId);
            }}
          />
        )}

        {page === 'city' && <PageCity onSetPage={setPage} />}

        {page === 'hero' && (
          <PageHero
            money={money}
            exp={experience}
            lvl={lvl}
            expNextLvl={expNextLvl}
            availableSkillPoints={availableSkillPoints}
            learnedSkillIds={learnedSkillIds}
            onLearnSkill={learnSkill}
          />
        )}

        {page.includes('city-') && (
          <PageMapCity
            cityId={Number(page.split('-')[1])}
            onSetPage={setPage}
            dictionary={dictionary.liberateCities}
            storage={storage}
            liberatedCityIds={liberatedCityIds}
            liberateCity={liberateCity}
          />
        )}

        {page === 'editor' && <PageEditor dictionary={dictionary} />}
      </View>

      <Menu setPage={setPage} />
    </View>
  );
};

const SImage = styled.Image`
  height: 16px;
  width: 16px;
`;

const SSomePoint = styled.View`
  width: 100px;
`;

const SHeader = styled.Text`
  font-weight: 700;
  padding: 10px;
  color: white;
  font-family: 'LGGothic';
  font-size: 18px;
`;

const SMoneyWrapper = styled.View`
  width: 100px;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const SMoney = styled(CustomText)`
  color: yellow;
  font-size: 18px;
`;

const SHeaderBlock = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  height: 10%;
`;

const styles = StyleSheet.create({
  appWrapper: {
    flexDirection: 'column',
    flex: 1,
    width: '100%',
    backgroundColor: '#614D41',
  },
  appContent: {
    height: '80%',
    width: '100%',
    backgroundColor: '#967766',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  forgeBlock: {
    flexDirection: 'row',
    width: '100%',
    height: '75%',
    alignItems: 'stretch',
  },
  storageBlock: {
    height: '25%',
    width: '100%',
  },
  columnLeft: {
    width: '50%',
  },
  columnRight: {
    width: '50%',
  },
  orderBlock: {},
});
