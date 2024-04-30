const initialState = {
  sidebarNames: [
    'Surat Masuk',
    'Disposisi',
    'Disposisi Saya',
    'Todo',
    'Surat Keluar',
    'Log Scan Surat',
    'Draft Scan Surat',
    'Perlu Tindak Lanjut',
    'Lacak Proses',
    'Draft',
    'Komposer',
    'Template',
  ],
  selectedSidebarName: '', // Menambahkan properti baru untuk menyimpan nama sidebar yang dipilih
};

const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SIDEBAR_NAME':
      // Mencari apakah nama yang diberikan ada di dalam sidebarNames
      if (state.sidebarNames.includes(action.payload)) {
        return {
          ...state,
          selectedSidebarName: action.payload, // Mengubah properti selectedSidebarName sesuai dengan nama yang diberikan
        };
      } else {
        // Jika nama yang diberikan tidak ada di sidebarNames, Anda dapat memilih untuk menangani ini dengan cara tertentu, misalnya mengembalikan state tanpa perubahan
        return state;
      }
    default:
      return state;
  }
};

export default sidebarReducer;
