
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions
} from 'react-native';

import { SearchBar, NoRequestsLabel, NoRequestsBody, MyRequestItem} from "./uicomponents/components";
import EStyleSheet from 'react-native-extended-stylesheet';

const entireScreenWidth = Dimensions.get('window').width;
const entireScreenHeight = Dimensions.get('window').height;
EStyleSheet.build({
    $rem: Math.min(entireScreenWidth,entireScreenHeight) / 380,
});

const App: () => React$Node = () => {
  const state = {
    data : [
      {
        date: "05-01-2019",
        service: "visa sevice 1235sd4Rt",
        status: "Application Process",
        type: 1
      },
      {
        date: "05-01-2019",
        service: "visa sevice 1235sd4Rt",
        status: "Application Process",
        type: 2
      },
      {
        date: "05-01-2019",
        service: "visa sevice 1235sd4Rt",
        status: "Application Process",
        type: 5
      },
    ]
  }
  var renderList = () => {
    return state.data.map((datum) => {
      return (
        <MyRequestItem date={datum.date} service={datum.service} status={datum.status} type={datum.type} />
      )
    })
  }
  const emptyText = "Lorum ipsum Lorum ipsum Lorum ipsumLorum ipsum Lorum ipsum Lorum ipsumLorum ipsum Lorum ipsum Lorum ipsum;"
  return (
    <>
          <View style={styles.body} >
            <SearchBar />
            { state ? renderList() : (
              <View style={styles.body} >
                <NoRequestsLabel label="No new action required item available" />
                <NoRequestsBody emptyText={emptyText} img={1} />
              </View>
            ) }
        {/*    <NoRequestsLabel label="No new action required item available" />
            <NoRequestsBody emptyText={emptyText} img={1} />
        */}
          </View>
    </>
  );
};

const styles = EStyleSheet.create({
  body : {
    padding: "30 rem",
    height: "100%"
  }
});

export default App;
