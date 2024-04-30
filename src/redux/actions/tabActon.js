import React from 'react';
import Keamanan from 'modules/keamanan';
import Bantuan from 'modules/bantuan';
import Profile from 'modules/profile';
import DetailTodo from 'modules/disposisi/todo/DetailTodo';
import PDFReader from '@crema/components/PDFReader/PDFReader';
import inboxIcon from '../../assets/icon/inbox.svg';
import disposisiIcon from '../../assets/icon/disposisi.svg';
import folderIcon from '../../assets/icon/folder.svg';
import securityIcon from '../../assets/icon/shield.svg';
import helpIcon from '../../assets/icon/help-circle.svg';
import profileIcon from '../../assets/icon/user.svg';
import searchIcon from '../../assets/icon/search.svg';
import scanIcon from '../../assets/icon/scan.svg';
import Add_Delegasi from 'modules/dashboard/Add_Delegasi';
import Add_Sekretaris from 'modules/dashboard/Add_Sekretaris';
import DetailScanSurat from 'modules/scanSurat/DetailScanSurat';
import BuatScanSurat from 'modules/scanSurat/BuatScanSurat';
import Surat_Internal from 'modules/buatSurat/SuratInternal';
import Surat_Undangan from 'modules/buatSurat/SuratUndangan';
import Surat_Delegasi from 'modules/buatSurat/SuratDelegasi';
import iconSurat from '../../assets/icon/mail.svg';
import Disposisi from 'modules/disposisi/respons/DetailSurat';
import BuatSurat from 'modules/disposisi/respons/BuatDisposisi';
import BelumPilih from 'modules/suratKeluar/BelumPilih';
import PerluTindakLanjut from 'modules/suratKeluar/perluTindakLanjut/PerluTindakLanjut';
import Draft from 'modules/suratKeluar/draft/Draft';
import LacakProses from 'modules/suratKeluar/lacakProses/LacakProses';
import Komposer from 'modules/suratKeluar/komposer/Komposer';
import Template from 'modules/suratKeluar/template/Template';
import SearchTab from 'modules/search/index';
import SuratMasuk from 'modules/suratMasuk/SuratMasuk';

export const addTab = (id, state, type) => {
  return (dispatch) => {
    const isExistingTab = state.some(
      (tab) =>
        tab.id.toLowerCase() === type.toLowerCase() || tab.title === type,
    );
    if (!isExistingTab) {
      const activeTab = state.find((tab) => tab.active);
      if (activeTab) {
        activeTab.active = false;
      }
      let tabs = {
        id: type.toLowerCase(),
        title: type,
        favicon:
          type === 'Folder'
            ? folderIcon
            : type === 'Keamanan'
            ? securityIcon
            : type === 'FAQ'
            ? helpIcon
            : type === 'Profile'
            ? profileIcon
            : type === 'Disposisi'
            ? disposisiIcon
            : type === 'Todo'
            ? disposisiIcon
            : type === 'Log Scan Surat'
            ? scanIcon
            : type === 'Buat Scan Surat'
            ? inboxIcon
            : type === 'Surat Masuk'
            ? inboxIcon
            : type === 'Draft Scan Surat'
            ? scanIcon
            : type === 'Buat Surat Internal'
            ? iconSurat
            : type === 'Buat Surat Undangan'
            ? iconSurat
            : type === 'Buat Surat Delegasi'
            ? iconSurat
            : type === 'Buka Surat'
            ? scanIcon
            : type === 'Search'
            ? searchIcon
            : type === 'Perlu Tindak Lanjut'
            ? inboxIcon
            : type === 'Lacak Proses'
            ? inboxIcon
            : type === 'Draft'
            ? inboxIcon
            : type === 'Komposer'
            ? inboxIcon
            : type === 'Template'
            ? inboxIcon
            : '',

        content:
          type === 'Keamanan' ? (
            <Keamanan />
          ) : type === 'FAQ' ? (
            <Bantuan />
          ) : type === 'Profile' ? (
            <Profile />
          ) : type === 'BuatDisposisi' ? (
            <BuatSurat />
          ) : type === 'Add_Sekretaris' ? (
            <Add_Sekretaris />
          ) : type === 'Add_Delegasi' ? (
            <Add_Delegasi />
          ) : type === 'Buat Surat Internal' ? (
            <Surat_Internal />
          ) : type === 'Buat Surat Undangan' ? (
            <Surat_Undangan />
          ) : type === 'Buat Surat Delegasi' ? (
            <Surat_Delegasi />
          ) : type === 'Buat Scan Surat' ? (
            <BuatScanSurat />
          ) : type === 'Buka Surat' ? (
            <PDFReader />
          ) : type === 'Search' ? (
            <SearchTab />
          ) : (
            <BelumPilih />
          ),
        active: true,
      };
      dispatch({ type: 'ADD_TAB', payload: tabs });
    } else {
      const isExistingTab = state.some(
        (tab) => tab.id.toLowerCase() === type.toLowerCase(),
      );
      if (isExistingTab) {
        dispatch(activateTab(type.toLowerCase(), state));
      } else {
        return;
      }
    }
  };
};

export const childTab = (id, state, type, data) => {
  return (dispatch) => {
    const isExistingTab = state.find((tab) => {
      switch (type) {
        case 'Todo':
          return tab.id === 'todo';
        case 'Disposisi':
          return tab.id === 'disposisi';
        case 'Perlu Tindak Lanjut':
          return tab.id === 'perlu tindak lanjut';
        case 'Lacak Proses':
          return tab.id === 'lacak proses';
        case 'Draft':
          return tab.id === 'draft';
        case 'Komposer':
          return tab.id === 'komposer';
        case 'Template':
          return tab.id === 'template';
        case 'Surat Masuk':
          return tab.id === 'surat masuk';
        case 'Log Scan Surat':
          return tab.id === 'log scan surat';
        default:
          return false;
      }
    });
    if (isExistingTab) {
      const updateTab = {
        ...isExistingTab,
        id: `${isExistingTab.id}${id}`,
        content:
          type === 'Todo' ? (
            <DetailTodo props={data} />
          ) : type === 'Disposisi' ? (
            <Disposisi props={data} />
          ) : type === 'Perlu Tindak Lanjut' ? (
            <PerluTindakLanjut props={data} />
          ) : type === 'Draft' ? (
            <Draft props={data} />
          ) : type === 'Lacak Proses' ? (
            <LacakProses props={data} />
          ) : type === 'Komposer' ? (
            <Komposer props={data} />
          ) : type === 'Template' ? (
            <Template props={data} />
          ) : type === 'Surat Masuk' ? (
            <SuratMasuk props={data} />
          ) : type === 'Log Scan Surat' ? (
            <DetailScanSurat props={data} />
          ) : (
            ''
          ),
      };
      if (type === 'Surat Masuk') {
        dispatch({ type: 'UPDATE_TAB_SURATMASUK', payload: updateTab });
      } else if (type === 'Log Scan Surat') {
        dispatch({ type: 'UPDATE_TAB_LOGSCANSURAT', payload: updateTab });
      } else {
        dispatch({ type: 'UPDATE_TAB_DISPOSISI', payload: updateTab });
      }
      // if (type === 'Todo') {
      //   dispatch({ type: 'UPDATE_TAB_TODO', payload: updateTab });
      // } else if (type === 'Disposisi') {
      // } else if (type === 'Log Scan Surat') {
      //   dispatch({ type: 'UPDATE_TAB_LOGSCANSURAT', payload: updateTab });
      // } else
    } else {
      const exChildTab = state.find(
        (tab) => tab.id === `${type.toLowerCase()}${id}`,
      );
      if (exChildTab) {
        dispatch(activateTab(`${type.toLowerCase()}${id}`, state));
      } else {
        const activeTab = state.find((tab) => tab.active);

        if (activeTab) {
          activeTab.active = false;
        }
        let tabs = {
          id: `${type.toLowerCase()}${id}`,
          title: type,
          favicon: inboxIcon,
          content:
            type === 'Todo' ? (
              <DetailTodo props={data} />
            ) : type === 'Disposisi' ? (
              <Disposisi props={data} />
            ) : type === 'Perlu Tindak Lanjut' ? (
              <PerluTindakLanjut props={data} />
            ) : type === 'Draft' ? (
              <Draft props={data} />
            ) : type === 'Lacak Proses' ? (
              <LacakProses props={data} />
            ) : type === 'Komposer' ? (
              <Komposer props={data} />
            ) : type === 'Template' ? (
              <Template props={data} />
            ) : type === 'Surat Masuk' ? (
              <SuratMasuk props={data} />
            ) : type === 'Log Scan Surat' ? (
              <DetailScanSurat props={data} />
            ) : (
              ''
            ),
          active: true,
        };
        dispatch({ type: 'ADD_TAB', payload: tabs });
      }
    }
  };
};

export const activateTab = (tabId, state) => {
  return (dispatch) => {
    const updatedTabs = state.map((tab) => ({
      ...tab,
      active: tab.id === tabId,
    }));
    dispatch({ type: 'ACTIVE_TAB', payload: updatedTabs });
  };
};

export const closeTab = (tabId, state) => {
  return (dispatch) => {
    if (tabId === 'dashboard') {
      return;
    }

    const tabIndex = state.findIndex(
      (tab) => tab.id.toString() === tabId.toString(),
    );
    let newActiveTabIndex;

    if (tabIndex > 0) {
      newActiveTabIndex = tabIndex - 1;
    } else if (tabIndex === 0 && state.length > 1) {
      newActiveTabIndex = 1;
    } else {
      newActiveTabIndex = 'dashboard';
    }

    const tabs = state.filter((tab) => tab.id !== tabId);
    dispatch({ type: 'CLOSE_TAB', payload: tabs });
    const newActiveTabId =
      newActiveTabIndex !== 'dashboard'
        ? tabs[newActiveTabIndex].id
        : 'dashboard';
    dispatch(activateTab(newActiveTabId, tabs));
  };
};

export const closeAllTabs = () => {
  return (dispatch) => {
    const tabs = [];
    dispatch({ type: 'CLOSE_ALL_TABS', payload: tabs });
  };
};

export const reorderTab = (tabId, fromIndex, toIndex, state) => {
  return (dispatch) => {
    let movedTab = state[fromIndex];
    let remainingTabs = state.filter((_, index) => index !== fromIndex);
    remainingTabs.splice(toIndex, 0, movedTab);
    dispatch({ type: 'REORDER_TAB', payload: remainingTabs });
  };
};
