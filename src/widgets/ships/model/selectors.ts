export const selectorShipsData = (state: AppRootStateType) => state.ships.shipsData
export const selectorLoadingShips = (state: AppRootStateType) => state.ships.isLoading
export const selectorCurrentPage = (state: AppRootStateType) => state.ships.currentPage
export const selectorShipPort = (state: AppRootStateType) => state.ships.queryParams.home_port
export const selectorShipType = (state: AppRootStateType) => state.ships.queryParams.ship_type
export const selectorShipName = (state: AppRootStateType) => state.ships.queryParams.ship_name


