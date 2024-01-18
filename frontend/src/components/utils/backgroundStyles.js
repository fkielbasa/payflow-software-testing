export const backgroundStyles1 = {
    background: 'linear-gradient(55deg, rgba(22,135,167,1) 10%, rgba(39,102,120,1) 90%)'
};

export const backgroundStyles2 = {
    background: 'linear-gradient(225deg, rgba(22,135,167,1) 5%, rgba(29,41,50,1) 95%)'
};

export const backgroundStyles3 = {
    background: 'linear-gradient(326deg, rgba(39,102,120,1) 5%, rgba(0,198,255,1) 95%)'
};

export const backgroundStyles4 = {
    background: 'linear-gradient(73deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)'
};

export  const generateRandomColor = () => {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
};

export const generateRandomLightColor = () => {
    const limit = 200;
    const randomColorComponent = () => Math.floor(Math.random() * (255 - limit) + limit);
    return `rgb(${randomColorComponent()}, ${randomColorComponent()}, ${randomColorComponent()})`;
};
