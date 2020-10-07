import axios from 'axios';
import BaseUrl from '../Urls/urls';

/********************************{ GET EMPLOYEES }************************************* */
export const GetEmployes =()=>{
    return (dispatch:any)=>{
        return axios.get(BaseUrl +"/fetch")
        .then((posRes)=>{
               dispatch(fun_one(posRes.data));
        },(ErrRes)=>{
             console.log(ErrRes);
        })
    }
};
export  const fun_one=(records:any)=>{
    return{type:"FETCH",value:records}
};
/************************************************************************************** */

/*********************************{ ADD EMPLOYEES }************************************ */
export const addEmploye = (record:any)=>{
    return (dispatch:any)=>{
        return axios.post(BaseUrl +"/insert")
                    .then((posRes)=>{
                        dispatch(fun_two(posRes.data));
                    },(errRes)=>{
            console.log(errRes);
        });
    };
};
export const fun_two = (result:any)=>{
    return { type:"INSERT", value:result };

}
/************************************************************************************************* */

/***********************************{ UPDATE EMPLOYEES }****************************************** */
export const updateEmploye = (record:any)=>{
    return (dispatch:any)=>{
        return axios.put(BaseUrl +"/update")
                    .then((posRes)=>{
                        dispatch(fun_three(posRes.data));
                    },(errRes)=>{
                       console.log(errRes);
        });
    };
};
export const fun_three = (result:any)=>{
    return { type:"UPDATE", value:result };
}
/******************************************************************************************** */

/***********************************{ DELETE EMPLOYEES }****************************************/
export const deleteEmploye = (record:any)=>{
    return (dispatch:any)=>{
        return axios.delete(BaseUrl +"/delete")
                    .then((posRes)=>{
                        dispatch(fun_four(posRes.data));
                    },(errRes)=>{
                console.log(errRes);
        });
    };
};
export const fun_four = (result:any)=>{
    return {type:"DELETE",value:result};
};
/************************************************************************************************/