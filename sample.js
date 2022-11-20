const myGirl = {
    name: 'Susmita Karki',
    importance: 'wife',
    nickName: 'Bachhi',
    dumb: true,
    msg: 'same here',
    replace: () => {
        return msg = myGirl.msg.replace('same here', 'I love you so much my husband 😚❤');
    },
    explain: () => {
        return `\n\n MyGirlName :-  ${myGirl.name} \n NickName:-${myGirl.nickName}\n role:-${myGirl.importance}\n Is she dumb..? HAHA-${myGirl.dumb} \n MessageInANger:- ${myGirl.msg} \n ActualMeaning :- ${myGirl.replace(myGirl.msg)}\n\n`;
    }
}
console.log(myGirl.explain());
// console.log(myGirl.replace(myGirl.msg));