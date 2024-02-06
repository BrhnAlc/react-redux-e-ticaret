
// Bir reducer, belirli bir durumu değiştirmek için eylemleri (actions) ele alır ve mevcut durumu ve bir eylemi alarak yeni bir durum döndürür.

export const drawerReducer = (state = { drawer: false }, action) => {
    switch (action.type) {
        case "DRAWER":
            return {
                drawer: action.payload
            };
    
        default:
            return state;
    }
};