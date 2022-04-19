const gioBatDauDi = 19

function con_tho_an_co (gioAnCo) {
  return new Promise ((resolve, reject) => {
    setTimeout (() => {
      console.log (`Con tho an co luc: ${gioBatDauDi}H`)
      resolve(gioBatDauDi + 1)
    }, 1000);
  })
}

function con_tho_di_xem_phim (gioBatDauXemPhim) {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve(gioBatDauXemPhim + 2)
    }, 2000);
  })
}

function con_tho_di_dao (gioBatDauDiDao) {
  setTimeout(() => {
    console.log (`Con tho di dao xong luc: ${gioBatDauDiDao + 1}H`)
  }, 1000);
}


con_tho_an_co ()
.then ((gioAnXong) => {
  console.log (`Con tho an co xong luc: ${gioAnXong}H`)
  return con_tho_di_xem_phim (gioAnXong)
})
.then ((gioXemPhimXong) => {
  console.log (`Con tho di xem phim xong luc: ${gioXemPhimXong}H`)
    con_tho_di_dao (gioXemPhimXong)
})
.catch(error => {
  console.log("Con tho bi benh", error)
})