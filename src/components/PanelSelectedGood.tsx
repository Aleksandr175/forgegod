import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Panel } from './Panel';
import React from 'react';
import { dictionary } from '../dictionary';

interface IProps {
  goodId?: number;
}

export const PanelSelectedGood = ({ goodId }: IProps) => {
  const good = dictionary.goods.find((item) => item.id === goodId);

  return (
    <Panel title={'Order'}>
      <View style={styles.selectedItem}>
        <View style={styles.selectedItemImage}>
          {goodId && (
            <Image
              style={styles.iconBig}
              source={require('../images/' + goodId + '.png')}
            />
          )}
        </View>
        <View style={styles.selectedItemInfo}>
          {goodId && good && (
            <>
              <Text style={styles.selectedItemTitle}>{good.name}</Text>
              {good.requirements.resources?.length > 0 && (
                <>
                  <Text style={styles.selectedItemTitle}>Required:</Text>
                  {good.requirements.resources.map((requirement) => {
                    return (
                      <View style={styles.selectedItemRequired}>
                        <Image
                          style={styles.iconSmall}
                          source={require('../images/' +
                            requirement.id +
                            '.png')}
                        />
                        <Text>{requirement.qty}</Text>
                      </View>
                    );
                  })}
                </>
              )}
              <View style={styles.separator}></View>
              <Pressable
                style={styles.button}
                onPress={() => {
                  alert('button');
                }}
              >
                <Text style={styles.buttonText}>Order</Text>
              </Pressable>
            </>
          )}
        </View>
      </View>
    </Panel>
  );
};

const styles = StyleSheet.create({
  selectedItem: {
    padding: 5,
    backgroundColor: '#D9D9D9',
    flexDirection: 'row',
  },
  selectedItemImage: {
    width: 40,
    height: 40,
    backgroundColor: '#71635B',
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedItemInfo: {},
  selectedItemTitle: {
    color: 'white',
    paddingBottom: 5,
  },
  selectedItemRequired: {
    flexDirection: 'row',
  },
  iconSmall: {
    width: 16,
    height: 16,
  },
  iconBig: {
    width: 32,
    height: 32,
  },
  button: {
    backgroundColor: '#444',
  },
  buttonText: {
    textAlign: 'center', // <-- the magic
    color: 'white',
  },
  separator: {
    padding: 5,
  },
  containerWrapper: {
    padding: 5,
    width: '100%',
  },
  containerTitle: {
    backgroundColor: 'yellow',
  },
  container: {
    backgroundColor: '#888',
    width: '100%',
  },
});
