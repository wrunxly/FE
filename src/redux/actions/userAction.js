import fb from '../../assets/icon/home.png';
import google from '../../assets/icon/home.png';

export const onGetListUser = () => {
  // console.log("masuk action");
  return (dispatch) => {
    const listUser = [
      {
        name: 'nadhief',
        kelas: 'Ilkom c2',
      },
      {
        name: 'rapi',
        kelas: 'Ilkom c2',
      },
    ];
    dispatch({ type: 'LIST_USER', payload: listUser });
  };
};
