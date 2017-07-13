module.exports = {

    user_scores: [
        {
            name: 'Roman',
            scoreTime: 52,
            scoreEat: 8
        },
        {
            name: 'Taras',
            scoreTime: 44,
            scoreEat: 5
        },
        {
            name: 'Johny',
            scoreTime: 53,
            scoreEat: 7
        },
        {
            name: 'Michael',
            scoreTime: 40,
            scoreEat: 6
        }
    ],


    getAllInformation: (arr) => {
        return arr;
    },


    getUserHighestScore: (arr, user) => {
        for(let i = 0; i < arr.length; i++){
            if(arr[i].name === user){
                return arr[i]
            }
        }
        throw new Error("user:" + user + " can not be found");  
    },


    createNewUser: (arr, user, time, eat) => {
        for(let i = 0; i < arr.length; i++){
            if(arr[i].name === user){
                throw new Error("this user already exists");
            }
        }
        arr.push({name: user, scoreTime: +time, scoreEat: +eat});
        return "new user " + user + " has beed added";
    },


    updateUser: (arr, user, time, eat) => {
        for(let i = 0; i < arr.length; i++){
            if(arr[i].name === user){
                arr[i].scoreTime = +time;
                arr[i].scoreEat = +eat;
                return "user:" + user + " has beed updated";
            }
        }
        throw new Error("user:" + user + " can not be found");
    },


    removeUser: (arr, user) => {
        for(let i = 0; i < arr.length; i++){
            if(arr[i].name === user){
                arr.splice(i, 1);
                return 'user: ' + user + ' has been deleted';
            } 
        }
        throw new Error("user:" + user + " can not be found");
    }

}