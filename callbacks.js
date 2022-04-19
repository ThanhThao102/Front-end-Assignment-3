const gioBatDauDi = 19

function con_tho_an_co (hanhDongKhac) {
  setTimeout (() => {
    console.log (`Con tho an co luc: ${gioBatDauDi}H`)
    hanhDongKhac()
  }, 1000);
  return gioBatDauDi
}

function con_tho_an_co_xong(anXong) {
  const gioAnXong = con_tho_an_co(anXong) + 1;
  setTimeout (() => {
    console.log (`Con tho an xong luc: ${gioAnXong}H`)
  }, 0);
  return gioAnXong
}

function con_tho_di_xem_phim (xemPhim) {
  const gioXemPhimXong = con_tho_an_co_xong (xemPhim) + 2;
  setTimeout(() => {
    console.log (`Con tho di xem phim xong luc: ${gioXemPhimXong}H`)
  }, 2000);
  return gioXemPhimXong
}

function con_tho_di_dao (diDao) {
  const gioDiDaoXong = di_xemphim(diDao) + 1;
  setTimeout(() => {
    console.log (`Con tho di dao xong luc: ${gioDiDaoXong}H`)
  }, 1000);
}


con_tho_an_co(() => {
  con_tho_an_co_xong (() => {
    con_tho_di_xem_phim(() => {
      con_tho_di_dao ()  
    })
  })
})
