"use strict";
const step1 = () => {
    return new Promise((resolve, rejects) => {
        setTimeout(() => {
            try {
                const nextStep = 1;
                console.log("complete step 1");
                resolve(nextStep);
            }
            catch (error) {
                rejects();
            }
        }, 1000);
    });
};
const step2 = (step) => {
    return new Promise((resolve, rejects) => {
        setTimeout(() => {
            try {
                const nextStep = step + 1;
                console.log(`complete step ${nextStep}`);
                resolve(nextStep);
            }
            catch (error) {
                rejects();
            }
        }, 1000);
    });
};
const step3 = (step) => {
    return new Promise((resolve, rejects) => {
        setTimeout(() => {
            try {
                const nextStep = step + 1;
                console.log(`complete step ${nextStep}`);
                resolve(nextStep);
            }
            catch (error) {
                rejects();
            }
        }, 1000);
    });
};
step1()
    .then((result) => {
    return step2(result);
}).then((result) => {
    return step2(result);
})
    .then(() => {
    console.log('Your house is done');
}).catch((error) => {
    console.log(error);
});
