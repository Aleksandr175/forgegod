import { StyleSheet, View } from 'react-native';
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
import { SButton } from './styles';

export const App = () => {
  const [page, setPage] = useState<TPage>('forge');
  const [mineLvl, setMineLvl] = useState(1);
  const [money, setMoney] = useState(20000);
  const [maxOrdersQty, setMaxOrdersQty] = useState(5);
  const [expeditionInfo, setExpeditionInfo] =
    useState<IExpeditionInfoInProcess>({} as IExpeditionInfoInProcess);

  const [isTutorialOn, setIsTutorialOn] = useState(true);
  const [isHeroPageTutorialOn, setIsHeroPageTutorialOn] = useState(true);
  const [isMinePageTutorialOn, setIsMinePageTutorialOn] = useState(true);
  const [isOrdersPageTutorialOn, setIsOrdersPageTutorialOn] = useState(true);
  const [isCityPageTutorialOn, setIsCityPageTutorialOn] = useState(true);
  const [isCity1PageTutorialOn, setIsCity1PageTutorialOn] = useState(true);

  const [loaded] = useFonts({
    LGGothic: require('./fonts/LGGothic.ttf'),
  });

  const [experience, setExperience] = useState(100);
  const [learnedSkillIds, setLearnedSkillIds] = useState([1, 4]);
  const [lvl, setLvl] = useState(0);
  const [expNextLvl, setExpNextLvl] = useState(
    dictionary.heroLvls[lvl - 1]?.experience || 0,
  );

  const [availableSkillPoints, setAvailableSkillPoints] = useState(0);
  const [economistBonus, setEconomistBonus] = useState(0);
  const [maxCustomerOrdersQty, setMaxCustomerOrdersQty] = useState(3);

  const [selectedGoodId, setSelectedGoodId] = useState<number>(2);

  const getAllResources = () => {
    const resources: IStorageGood[] = [];

    dictionary.goods.forEach((good) => {
      resources.push({
        id: good.id,
        qty: 1000,
      });
    });

    return resources;
  };
  const [storage, setStorage] = useState<IStorageGood[]>(
    () => getAllResources() /*[
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
  ]*/,
  );

  const addExperience = (expQty: number) => {
    setExperience((prevState) => {
      return Math.floor(prevState + expQty);
    });
  };

  useEffect(() => {
    const appropriateLvlIndex = dictionary.heroLvls.findIndex(
      (expLvl, index) => experience < expLvl.experience,
    );

    if (appropriateLvlIndex > -1) {
      const changeLvl = appropriateLvlIndex + 1 - lvl;
      const newLvl = lvl + changeLvl;

      setLvl(() => {
        return newLvl;
      });

      setAvailableSkillPoints((prevState) => {
        return prevState + changeLvl;
      });

      setExpNextLvl((prevState) => {
        return dictionary.heroLvls[newLvl - 1]?.experience || 0;
      });
    }
  }, [experience]);

  const orderId = useRef(1);

  const [orders, setOrders] = useState<IOrder[]>([]);

  useEffect(() => {
    createOrder(2, 1);
    createOrder(3, 1);
    createOrder(3, 1);
  }, []);

  const [workersQty, setWorkersQty] = useState<number>(1);

  useEffect(() => {
    const workerIds = orders
      .filter((order) => order.workerId)
      .map((order) => order.workerId);
    const ordersWithoutWorker = orders.filter((order) => !order.workerId);

    const restedWorkerIds = workers
      .filter(
        (worker) => !workerIds.includes(worker.id) && worker.id <= workersQty,
      )
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
  }, [orders.length, workersQty]);

  // workersQty checks id of workers!
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
    {
      id: 4,
      name: 'Worker3',
      orderId: null,
    },
    {
      id: 5,
      name: 'Worker4',
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
      return Math.floor(prevState + amount);
    });
  };

  const removeFromStorage = (goodId: number, qty: number): void => {
    setStorage((prevStorage) => {
      const newStorage = [...prevStorage];
      const itemIndex: number = newStorage.findIndex(
        (storageItem) => storageItem.id === goodId,
      );

      if (itemIndex > -1) {
        // Update existing item's quantity
        newStorage[itemIndex].qty = Math.max(
          0,
          newStorage[itemIndex].qty - qty,
        );
      } else {
        // Add new storage item
        newStorage.push({ id: goodId, qty: Math.max(0, qty) });
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
      maxCustomerOrdersQty,
      economistBonus,
      skillIds: learnedSkillIds,
      mineLvl,
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
    expedition.canBeFoundGoodIds.map((goodId) => {
      addToStorage(goodId, 1);
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
    const mineInfo = dictionary.mine.find((mine) => mine.lvl === mineLvl + 1);

    if (mineInfo) {
      if (hasEnoughResourcesToImproveMine(mineInfo, storage, money)) {
        improveMine();

        mineInfo.requirements.resources.forEach((resource) => {
          removeFromStorage(resource.id, resource.qty);
        });

        addMoney(-mineInfo.cost);
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
        mineLvl: mine.lvl,
        canBeFoundGoodIds: mine.expedition.canBeFoundGoodIds,
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
    //Economist
    if (
      learnedSkillIds.includes(1) ||
      learnedSkillIds.includes(2) ||
      learnedSkillIds.includes(3)
    ) {
      if (learnedSkillIds.includes(1)) {
        setEconomistBonus(5);
      }
      if (learnedSkillIds.includes(2)) {
        setEconomistBonus(10);
      }
      if (learnedSkillIds.includes(3)) {
        setEconomistBonus(15);
      }
    }

    //Salesman
    if (
      learnedSkillIds.includes(4) ||
      learnedSkillIds.includes(5) ||
      learnedSkillIds.includes(6)
    ) {
      if (learnedSkillIds.includes(4)) {
        setMaxCustomerOrdersQty(4);
      }
      if (learnedSkillIds.includes(5)) {
        setMaxCustomerOrdersQty(5);
      }
      if (learnedSkillIds.includes(6)) {
        setMaxCustomerOrdersQty(6);
      }
    }

    //Gunsmith
    if (
      learnedSkillIds.includes(7) ||
      learnedSkillIds.includes(8) ||
      learnedSkillIds.includes(9)
    ) {
      // How to analyze which goods we can create?
    }

    //Armor Master
    if (learnedSkillIds.includes(10) || learnedSkillIds.includes(11)) {
      // How to analyze which goods we can create?
    }

    //Manager
    if (
      learnedSkillIds.includes(12) ||
      learnedSkillIds.includes(13) ||
      learnedSkillIds.includes(14)
    ) {
      if (learnedSkillIds.includes(12)) {
        setMaxOrdersQty(4);
      }
      if (learnedSkillIds.includes(13)) {
        setMaxOrdersQty(5);
      }
      if (learnedSkillIds.includes(14)) {
        setMaxOrdersQty(7);
      }
    }

    //Exploiter
    if (
      learnedSkillIds.includes(15) ||
      learnedSkillIds.includes(16) ||
      learnedSkillIds.includes(17)
    ) {
      if (learnedSkillIds.includes(15)) {
        setWorkersQty(2);
      }
      if (learnedSkillIds.includes(16)) {
        setWorkersQty(3);
      }
      if (learnedSkillIds.includes(17)) {
        setWorkersQty(5);
      }
    }
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
                <View>
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
                  skillIds={learnedSkillIds}
                  mineLvl={mineLvl}
                />
              </View>
            </View>

            <SPanelStorageWrapper>
              <PanelStorage storage={storage} />
            </SPanelStorageWrapper>
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
            maxCustomerOrdersQty={maxCustomerOrdersQty}
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

      <STutorialModal
        animationType="fade"
        transparent={true}
        visible={isTutorialOn && page === 'forge'}
        onRequestClose={() => {
          setIsTutorialOn(false);
        }}
      >
        <SModalWrapper>
          <SModal>
            <STextWrapper>
              <CustomText>Hi, Forge God!</CustomText>
              <CustomText>
                Many years we were under attack of enemies!
              </CustomText>
              <CustomText>
                It is time to liberate our cities! And for it we need your help!
              </CustomText>
              <CustomText>
                Give us weapons and we will destroy our enemies together!
              </CustomText>
            </STextWrapper>

            <SButton
              onPress={() => {
                setIsTutorialOn(false);
              }}
            >
              <CustomText>Close</CustomText>
            </SButton>
          </SModal>
        </SModalWrapper>
      </STutorialModal>

      <STutorialModal
        animationType="fade"
        transparent={true}
        visible={isHeroPageTutorialOn && page === 'hero'}
        onRequestClose={() => {
          setIsHeroPageTutorialOn(false);
        }}
      >
        <SModalWrapper>
          <SModal>
            <STextWrapper>
              <CustomText>Hero!</CustomText>
              <CustomText>You can learn new skills here.</CustomText>
              <CustomText>But you need to get experience first!</CustomText>
            </STextWrapper>

            <SButton
              onPress={() => {
                setIsHeroPageTutorialOn(false);
              }}
            >
              <CustomText>Close</CustomText>
            </SButton>
          </SModal>
        </SModalWrapper>
      </STutorialModal>

      <STutorialModal
        animationType="fade"
        transparent={true}
        visible={isMinePageTutorialOn && page === 'mine'}
        onRequestClose={() => {
          setIsMinePageTutorialOn(false);
        }}
      >
        <SModalWrapper>
          <SModal>
            <STextWrapper>
              <CustomText>Mine!</CustomText>
              <CustomText>You can buy some resources here.</CustomText>
              <CustomText>
                Do not forget to improve level of our mine!
              </CustomText>
              <CustomText>
                And remember! Some resources can be found only in expedition! It
                is time try it!
              </CustomText>
            </STextWrapper>

            <SButton
              onPress={() => {
                setIsMinePageTutorialOn(false);
              }}
            >
              <CustomText>Close</CustomText>
            </SButton>
          </SModal>
        </SModalWrapper>
      </STutorialModal>

      <STutorialModal
        animationType="fade"
        transparent={true}
        visible={isOrdersPageTutorialOn && page === 'orders'}
        onRequestClose={() => {
          setIsOrdersPageTutorialOn(false);
        }}
      >
        <SModalWrapper>
          <SModal>
            <STextWrapper>
              <CustomText>It is your forge!</CustomText>
              <CustomText>
                Do not forget to sell some goods you created in order to get
                experience and more gold.
              </CustomText>
            </STextWrapper>

            <SButton
              onPress={() => {
                setIsOrdersPageTutorialOn(false);
              }}
            >
              <CustomText>Close</CustomText>
            </SButton>
          </SModal>
        </SModalWrapper>
      </STutorialModal>

      <STutorialModal
        animationType="fade"
        transparent={true}
        visible={isCityPageTutorialOn && page === 'city'}
        onRequestClose={() => {
          setIsCityPageTutorialOn(false);
        }}
      >
        <SModalWrapper>
          <SModal>
            <STextWrapper>
              <CustomText>City And Map</CustomText>
              <CustomText>Use it for fast navigation.</CustomText>
              <CustomText>
                Your main gold is liberate all our cities! Do not hesitate!
              </CustomText>
            </STextWrapper>

            <SButton
              onPress={() => {
                setIsCityPageTutorialOn(false);
              }}
            >
              <CustomText>Close</CustomText>
            </SButton>
          </SModal>
        </SModalWrapper>
      </STutorialModal>

      <STutorialModal
        animationType="fade"
        transparent={true}
        visible={isCity1PageTutorialOn && page === 'city-1'}
        onRequestClose={() => {
          setIsCity1PageTutorialOn(false);
        }}
      >
        <SModalWrapper>
          <SModal>
            <STextWrapper>
              <CustomText>Liberate cities</CustomText>
              <CustomText>It requires some weapons and resources.</CustomText>
              <CustomText>
                You can buy it or create it and liberate each city.
              </CustomText>
            </STextWrapper>

            <SButton
              onPress={() => {
                setIsCity1PageTutorialOn(false);
              }}
            >
              <CustomText>Close</CustomText>
            </SButton>
          </SModal>
        </SModalWrapper>
      </STutorialModal>

      <Menu
        currentPage={page}
        setPage={setPage}
        availableSkillPoints={availableSkillPoints}
        customerOrdersQty={customerOrders.length}
      />
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

const SHeader = styled(CustomText)`
  font-weight: 700;
  padding: 10px;
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
    flex: 1,
    width: '100%',
    backgroundColor: '#967766',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  forgeBlock: {
    flexDirection: 'row',
    width: '100%',
    flex: 1,
    alignItems: 'stretch',
  },
  storageBlock: {
    height: '100px',
    width: '100%',
  },
  columnLeft: {
    width: '50%',
  },
  columnRight: {
    width: '50%',
  },
});

const SPanelStorageWrapper = styled.View`
  width: 100%;
`;

const STutorialModal = styled.Modal`
  position: fixed;
`;

const SModalWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`;

const STextWrapper = styled.View`
  padding-bottom: 10px;
`;

const SModal = styled.View`
  margin: 20px;
  background-color: #614d41;
  padding: 10px;
  align-items: center;
`;
