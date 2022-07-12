const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}
// function a() {
//     let area = [];
//     shoppingMallData.shops.forEach((arr,i) => {
//         const a = arr.width * arr.length;
//         area[i] = a
//     });
//
//     let mainArea = 0;
//     for (i of area) {
//         mainArea += i
//     }
//     console.log(mainArea)
// }
// a()

function isBudgetEnough() {
    let area = [];
    shoppingMallData.shops.forEach((arr,i) => {
        const a = arr.width * arr.length;
        area[i] = a
    });
    let mainArea = 0;
    for (i of area) {
        mainArea += i
    }
    const VolumeofСenter = mainArea * shoppingMallData.height;
    const valueofCenter = shoppingMallData.moneyPer1m3 * VolumeofСenter;

    if (valueofCenter <= shoppingMallData.budget) {
        console.log(`Volume of shopping center - ${VolumeofСenter}\nValue of shopping center - ${valueofCenter}
    `)
    } else {
        console.log(`Value of shopping center - ${valueofCenter}, but it is not enough`)
    }

}

isBudgetEnough()
