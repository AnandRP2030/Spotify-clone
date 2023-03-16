const initialState={plans:[
    {
        free: false,
        plan: "Mini",
        day: "From ₹7/day",
        account: "1 account on mobile only",
        adFree: "Ad-free music listening on mobile",
        group: "Group Session",
        download: "Download 30 songs on 1 mobile device",
        bg:"#0E8388",
        color:"white"
    },
    {
        free: true,
        plan: "Individual",
        day: "₹119/month after offer period",
        account: "1 account",
        adFree: "Ad-free music listening",
        group: "Group Session",
        download: "Download 10k songs/device on 5 devices",
        month12:"1,189",
        month6:"719",
        month3:"389",
        month1:"129",
        bg:"#3E54AC",
        color: "white"
    },
    {
        free: true,
        plan: "Duo",
        day: "₹149/month after offer period",
        family: "For couples who live together",
        account: "2 accounts",
        adFree: "Ad-free music listening",
        group: "Group Session",
        download: "Download 10k songs/device, on 5 devices per account",
        month12:"1,799",
        month6:"899",
        month3:"499",
        month1:"165",
        bg: "#ffc862",
        color: "black"
    },
    {
        free: true,
        plan: "Family",
        day: "₹179/month after offer period",
        family: "For family who live together",
        account: "Up to 6 accounts",
        adFree: "Ad-free music listening on mobile",
        group: "Group Session",
        download: "Download 30 songs on 1 mobile device",
        month12:"2,149",
        month6:"1,075",
        month3:"595",
        month1:"199",
        bg:"#EB455F",
        color: "white"
    },
],
    currentPlan: 0,
}

const PaymentReducer = (state=initialState, action)=>{
switch(action.type){
    case "SET_CURRENT_PLAN":{
        return{
          ...state,
            currentPlan:action.payload
        }
    }
    default : return state
}

}
export {PaymentReducer}









