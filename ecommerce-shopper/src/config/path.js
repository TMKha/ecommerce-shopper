const PROFILE ='/profile'
export const PATH = {
    Home: '/',
    Product:'/san-pham',
    ProductDetail:'/:slug',
    Category:'/:slug:/:id',
    Profile: {
        index:PROFILE,
        Order:PROFILE + '/order',
        Wishlist:PROFILE + '/wishlist',
        Address:PROFILE + '/address',
        Payment:PROFILE + '/payment'
    },
    Account:'/account'
}