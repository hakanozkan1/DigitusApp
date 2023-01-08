import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import Campaigns from '../../components/Campaigns'
import campaignsData from '../../campaignsData'
import HomeItem from '../../components/HomeItem'
import homeData from '../../homeData'

const Home = () => {
  return (
    <View>
      <Header search={true} profile={true} />
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.campaignContainer}>
        <ScrollView style={styles.campaigns} horizontal={true} showsHorizontalScrollIndicator={false}>
          {campaignsData.map((data) => (
            <Campaigns data={data} key={data.id} />
          ))}
        </ScrollView>
      </View>
      <View style={styles.flow}>
        {homeData.map((data) => (
            <HomeItem data={data} key={data.id} />
        ))}
      </View>
      </ScrollView>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  campaignContainer: {
    height:107,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  campaigns: {
    paddingTop: 13,
  },
  flow: {
    backgroundColor: "#EAEBEF",
    paddingHorizontal: 18,
    alignItems: "center",
    paddingBottom: 125
  },
});