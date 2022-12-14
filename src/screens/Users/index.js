import React, {useContext, useEffect, useState} from 'react';
import {COLORS} from '../../assets/colors';
import LogoutButton from '../../components/LogoutButton';
import {Container, FlatList} from './styles';
import Item from './Item';
import firestore from '@react-native-firebase/firestore';
import {CommonActions} from '@react-navigation/native';
import Loading from '../../components/Loading';
import {StatusBar} from 'react-native';
import {UsuarioContext} from '../../context/Api/UsuariosProvider';
import AddFloatButton from '../../components/AddFloatButton';

const Users = ({navigation}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const {usuarios, getUsuarios} = useContext(UsuarioContext);

  const fetchData = async () => {
    await getUsuarios();
    setLoading(false);
  };

  // const getUsers = () => {
  //   const unsubscribe = firestore()
  //     .collection('users')
  //     .onSnapshot(
  //       querySnapshot => {
  //         let d = [];
  //         querySnapshot.forEach(doc => {
  //           //console.log(doc.id, ' => ', doc.data());
  //           const user = {
  //             id: doc.id,
  //             nome: doc.data().nome,
  //             cel: doc.data().cel,
  //             email: doc.data().email,
  //           };
  //           d.push(user);
  //         });
  //         setData(d);
  //         setLoading(false);
  //       },
  //       e => {
  //         console.log('Home, getUsers: ' + e);
  //       },
  //     );
  //   return unsubscribe;
  // };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    // console.log(usuarios);
    setData(usuarios);
  }, [usuarios]);

  // const unsubscribe = getUsers();

  //   return () => {
  //     //console.log('ao desmontar o componente Home ');
  //     unsubscribe();
  //   };
  // }, []);

  const routeUser = item => {
    //setLoading(true);
    navigation.dispatch(
      CommonActions.navigate({
        name: 'User',
        params: {user: item},
      }),
    );
    //setLoading(false);
  };

  const routeAddUser = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'User',
        params: {user: null},
      }),
    );
  };

  const renderItem = ({item}) => (
    <Item item={item} onPress={() => routeUser(item)} />
  );

  return (
    <Container>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.uid}
      />
      <AddFloatButton onClick={routeAddUser} />
      {loading && <Loading />}
      <StatusBar backgroundColor="#fed32c" barStyle="dark-content" />
    </Container>
  );
};

export default Users;
