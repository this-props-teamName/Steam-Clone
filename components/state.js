import { atom } from 'recoil'; 

export const gamesState = atom({
    key: 'getGameInfo', 
    default: [],
}); 

export const carouselState = atom ({
    key: 'carousel', 
    default: [],
}); 

export const systemMinState = atom ({
    key: 'minimumReq', 
    default: [],
}); 
export const systemReqState = atom ({
    key: 'recommendedReq', 
    default: [],
}); 
export const newsState = atom ({
    key: 'news', 
    default: [],
}); 
