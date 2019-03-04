import React from 'react';
import classes from'./Home.module.css';
import FormElement from '../../components/FormElement/FormElement';
import axios from 'axios';

class Home extends React.Component{
    state = {
        requestForm: {
            employeeName:{
                label: 'Ажилтаны нэр',
                elementType: 'input', 
                elementConfig: {
                    type: 'text', 
                    placeholder: 'Ажилтаны нэр'
                }, 
                followed: [],
                hide: false,
                value: '', 
                validation: {
                    required: true, 
                    minLength: 2, 
                    maxLength: 20
                }, 
                valid: false, 
                touched: false
                }, 
            albanTushaal: {
                label: 'Албан тушаал',
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'default', displayValue: 'Alban tushaal songono uu.'}
                    ]
                },
                followed: [],
                hide: false,
                value: 'default',
                validation: {
                    required: true
                },
                valid: false
            }, 
            amount: {  
                label: 'Дүн',
                elementType: 'input', 
                elementConfig: {
                    type: 'text', 
                    placeholder: 'Дүн'
                }, 
                followed: ['amountLetter'],
                hide: false,
                value: '', 
                validation: {
                    required: true, 
                    minLength: 1, 
                    maxLength: 20
                }, 
                valid: false, 
                touched: false
            }, 
            currency: {
                label: 'Currency',
                elementType: 'select',
                elementConfig: {
                    options: [
                         
                    ]
                },
                followed: [],
                hide: false,
                value: 'MNT',
                validation: {
                    required: true
                },
                valid: false
            },
            amountLetter: {  
                label: 'Дүн / үсгээр /',
                elementType: 'input', 
                elementConfig: {
                    type: 'text', 
                    placeholder: 'Дүн / үсгээр /'
                },
                followed: [],
                hide: false,
                value: '', 
                validation: {required: false}, 
                valid: true, 
                touched: true
            },  
            tulburiinZoriulalt: {  
                label: 'Төлбөрийн зориулалт',
                elementType: 'input', 
                elementConfig: {
                    type: 'text', 
                    placeholder: 'Төлбөрийн зориулалт'
                }, 
                followed: [],
                hide: false,
                value: '', 
                validation: {
                    required: true, 
                    minLength: 1, 
                    maxLength: 20
                }, 
                valid: false, 
                touched: false
            }, 
            costType: {
                label: 'Зардлын төрөл',
                elementType: 'select',
                elementConfig: {
                    options: [
                    ]
                },
                followed: [],
                hide: false,
                value: 'default',
                validation: {
                    required: true
                },
                valid: false
            },
            isTusviinKod:{
                label: 'Зардал болох эсэх',
                elementType: 'input', 
                elementConfig: {
                    type: 'checkbox', 
                    placeholder: 'Зардал болох эсэх', 
                    checked: false
                }, 
                followed: ['tosviinKod'],
                hide: false,
                value: '', 
                validation: {
                    required: false, 
                    minLength: 1, 
                    maxLength: 20
                }, 
                valid: false, 
                touched: false
            },
            tosviinKod: {  
                label: 'Төсвийн код',
                elementType: 'input', 
                elementConfig: {
                    type: 'text', 
                    placeholder: 'Төсвийн код'
                }, 
                followed: [],
                hide: false,
                value: '', 
                validation: {
                    required: false, 
                    minLength: 1, 
                    maxLength: 20
                }, 
                valid: false, 
                touched: false
            },
            paymentType: {
                label: 'Төлбөрийн төрөл',
                elementType: 'input', 
                elementConfig: {
                    type: 'radio', 
                    options:  [
                        
                    ]
                },
                followed:['accountType', 'accountNumber', 'bank'] ,
                
                hide: false,
                value: '' , 
                validation: {
                    required: true, 
                }, 
                valid: false, 
                touched: false
            }, 
            accountType: {
                label: 'Дансны төрөл',
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'default', displayValue: 'Дансны төрлөө сонгоно уу!'},
                        
                        
                    ]
                },
                followed: [],
                hide: false,
                value: 'default',
                validation: {
                    required: false
                },
                valid: false
            },
        
            accountNumber: {
                label: 'Дансны дугаар',  
                elementType: 'input', 
                elementConfig: {
                    type: 'number', 
                    placeholder: 'Дансны дугаар'
                }, 
                followed: [],
                hide: false,
                value: '', 
                validation: {
                    required: false, 
                    minLength: 1, 
                    maxLength: 20, 
                    isNumeric: true
                }, 
                valid: false, 
                touched: false
            },
            bank: {
                label: 'Банк',
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'default', displayValue: 'Банк сонгоно уу!'},
                        
                    ]
                },
            
                followed: [],
                hide: false,
                value: 'default',
                validation: {
                    required: false
                },
                valid: false
            },
        },
        
        attachedFile: {
            nehemjlel:{
                label: 'Нэхэмжлэл',
                elementType: 'input', 
                elementConfig: {
                    type: 'checkbox', 
                    placeholder: 'Нэхэмжлэл', 
                    checked: false
                }, 
                followed: ['nehemjlelFile'],
                hide: false,
                value: '', 
                validation: {
                    required: false
                }, 
                valid: false, 
                touched: false
            },
            
            geree:{
                label: 'Гэрээ',
                elementType: 'input', 
                elementConfig: {
                    type: 'checkbox', 
                    placeholder: 'Гэрээ', 
                    checked: false
                }, 
                followed: ['gereeFile'],
                hide: false,
                value: '', 
                validation: {
                    required: false
                }, 
                valid: false, 
                touched: false
            },
            
            zarlaga:{
                label: 'Зарлага',
                elementType: 'input', 
                elementConfig: {
                    type: 'checkbox', 
                    placeholder: 'Зарлага'
                    ,checked : false
                }, 
                followed: ['zarlagaFile'],
                hide: false,
                value: '', 
                validation: {
                    required: false
                }, 
                valid: false, 
                touched: false
            },
            
        },
        extendedfile: {
            
            nehemjlelFile:{
                label: '',
                elementType: 'input', 
                elementConfig: {
                    type: 'file', 
                    placeholder: ''
                },
                followed: [], 
                hide: false,
                value: '', 
                validation: {
                    required: false
                }, 
                valid: false, 
                touched: false
            },
            gereeFile:{
                label: '',
                elementType: 'input', 
                elementConfig: {
                    type: 'file', 
                    placeholder: ''
                }, 
                followed: [],
                hide: false,
                value: '', 
                validation: {
                    required: false
                }, 
                valid: false, 
                touched: false
            },
            zarlagaFile:{
                    
                label: '',
                elementType: 'input', 
                elementConfig: {
                    type: 'file', 
                    placeholder: ''
                }, 
                followed: [],
                hide: false,
                value: '', 
                validation: {
                    required: false
                }, 
                valid: false, 
                touched: false
            },
            
        }
    }
    /*
    <input type="file"
       id="avatar" name="avatar"
       accept="image/png, image/jpeg">
    */
    componentDidMount(){
        axios.get('http://localhost:5000/api/position/getAllAlbanTushaal')
        .then(res =>{
            let requestform ={...this.state.requestForm};
            let axiosval = {...res.data.albantushaal};
            for(let ins in axiosval){
                
                requestform.albanTushaal.elementConfig.options.push({value: axiosval[ins]._id+ '', 
                    displayValue: 'Албан тушаал: '+axiosval[ins].name + ' Хэлтэс: ' + 
                    axiosval[ins].heltes.name + ' Алба: ' + 
                    axiosval[ins].alba.name});
            }
            requestform.albanTushaal.elementConfig.options.push({value: 'value', displayValue: 'displayValue'});
            this.setState({requestForm: requestform});
        })
        .catch(err =>{
        });
        axios.get('http://localhost:5000/api/payment/getAllCurrencyType')
        .then(res =>{
            let requestform ={...this.state.requestForm};
            let axiosval = {...res.data.currencyType};
            for(let ins in axiosval){
                
                requestform.currency.elementConfig.options.push({value: axiosval[ins]._id+ '', 
                    displayValue: axiosval[ins].name});
            }
            //requestform.albanTushaal.elementConfig.options.push({value: 'value', displayValue: 'displayValue'});
            this.setState({requestForm: requestform});
        })
        .catch(err =>{
        });

        axios.get('http://localhost:5000/api/payment/getAllPaymentType')
        .then(res =>{
            let requestform ={...this.state.requestForm};
            let axiosval = {...res.data.paymentType};
            for(let ins in axiosval){
                
                requestform.costType.elementConfig.options.push({value: axiosval[ins]._id+ '', 
                    displayValue: axiosval[ins].name});
            }
            //requestform.albanTushaal.elementConfig.options.push({value: 'value', displayValue: 'displayValue'});
            this.setState({requestForm: requestform});
        })
        .catch(err =>{
        });
        axios.get('http://localhost:5000/api/payment/getAllTulburHelber')
        .then(res =>{
            let requestform ={...this.state.requestForm};
            let axiosval = {...res.data.tulburhelberType};
            for(let ins in axiosval){
                
                requestform.paymentType.elementConfig.options.push({value: axiosval[ins]._id+ '', 
                    displayValue: axiosval[ins].name});
            }
            //requestform.albanTushaal.elementConfig.options.push({value: 'value', displayValue: 'displayValue'});
            this.setState({requestForm: requestform});
        })
        .catch(err =>{
        });
        axios.get('http://localhost:5000/api/payment/getAllAccountType')
        .then(res =>{
            let requestform ={...this.state.requestForm};
            let axiosval = {...res.data.accountType};
            for(let ins in axiosval){
                requestform.accountType.elementConfig.options.push({value: axiosval[ins]._id+ '', 
                    displayValue: axiosval[ins].name});
            }
            //requestform.albanTushaal.elementConfig.options.push({value: 'value', displayValue: 'displayValue'});
            this.setState({requestForm: requestform});
        })
        .catch(err =>{
        });

        axios.get('http://localhost:5000/api/payment/getAllBankType')
        .then(res =>{
            let requestform ={...this.state.requestForm};
            let axiosval = {...res.data.banks};
            for(let ins in axiosval){
                requestform.bank.elementConfig.options.push({value: axiosval[ins]._id+ '', 
                    displayValue: axiosval[ins].name});
            }
            //requestform.albanTushaal.elementConfig.options.push({value: 'value', displayValue: 'displayValue'});
            this.setState({requestForm: requestform});
        })
        .catch(err =>{
        });


        this.handleFollowedElements();
    }
    handleFollowedElements =()=>{
        let form1 = {...this.state.requestForm};
        for(let i in form1){
            if(!form1[i].valid){
                if(form1[i].followed.length > 0){
                        for(let b in form1[i].followed){
//                            console.log(form1[i].followed[b]);
                            //console.log(form1[form1[i].followed[b]], "  ", i);
                            form1[form1[i].followed[b]].hide =true;
                            form1[form1[i].followed[b]].validation.required = false;
                            //form1[form1[i].followed[b]].hide = true;
                            //form1[form1[i].followed[b]].validation.required = false;
                        }
                }
            }
        }
        let form12 = {...this.state.attachedFile};
        let form123 = {...this.state.extendedfile};
        //console.log("this is form12");
        for(let i in form12){
            //console.log("this is for");
            if(!form12[i].valid){
                console.log("this is ok", form12[i].followed);
                //console.log("this is ok");
                if(form12[i].followed.length > 0){
                    console.log(form123[form12[i].followed]);
                        for(let b in form12[i].followed){
                            
                            form123[form12[i].followed].hide = true;
                            form123[form12[i].followed].validation.required = false;
                            
                        }
                }
            }
            
        }

        this.setState({ requestForm: form1, attachedFile: form12});
        //console.log(this.state);
    }
    checkValidity =(value, rule)=>{
        if(!rule){
            return true;
        }
        if(rule.required){
            let isValid = true;
            if(rule.maxLength){
                isValid = isValid && value.length <=rule.maxLength;
                
            }
            if(rule.minLength){
                isValid = isValid && value.length >=rule.minLength;
                
            }
            if(rule.isNumeric){
                const pattern = /^(0|[1-9][0-9]*)$/;
                isValid = pattern.test(value) && isValid;
            }
            if(rule.isEmail){
                const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                isValid = pattern.test(value) & isValid;
            }
            return isValid;
        }else{
            return true;
        }
    }
    onChangeHandler =(event , id)=>{
        
        //console.log('On change handler ', id);
        //console.log(event);
        let tempform = {...this.state.requestForm};
        if(tempform[id].elementType === 'input'){
            if(tempform[id].elementConfig.type ==='text'){
                tempform[id].value = event.target.value;
                tempform[id].touched = true;
                tempform[id].valid = this.checkValidity(event.target.value, tempform[id].validation);
            }else  if(tempform[id].elementConfig.type ==='number'){
                tempform[id].value = event.target.value;
                tempform[id].touched = true;
                tempform[id].valid = this.checkValidity(event.target.value, tempform[id].validation);
            }
            else if(tempform[id].elementConfig.type === 'checkbox'){
                tempform[id].value = 'check';
                
                tempform[id].elementConfig.checked = !tempform[id].elementConfig.checked;
                tempform[id].valid = true;
                tempform[id].touched = true;
                if(tempform[id].elementConfig.checked){
                    if(tempform[id].followed.length>0){
                        const tempformfollowed = [...tempform[id].followed];

                        for(let ii in tempformfollowed){
                            //console.log( "temp form followed "+tempformfollowed[ii]);
                            tempform[tempformfollowed[ii]].hide = false;
                            tempform[tempformfollowed[ii]].validation.required = true;
                        }
                    }
                }else{
                    if(tempform[id].followed.length>0){
                        const tempformfollowed = [...tempform[id].followed];

                        for(let ii in tempformfollowed){
                            //console.log( "temp form followed "+tempformfollowed[ii]);
                            tempform[tempformfollowed[ii]].hide = true;
                            tempform[tempformfollowed[ii]].validation.required = false;
                        }
                    }
                }
            }
            else if(tempform[id].elementConfig.type === 'radio'){
                console.log(tempform[id]);
                //let options = [...tempform[id].elementConfig.options];
                tempform[id].value = event.target.value;
                tempform[id].touched = true;
                tempform[id].valid = true;
                if(event.target.value === '5c77b3284284df28b488cce9'){
                    if(tempform[id].followed.length>0){
                        const tempformfollowed = [...tempform[id].followed];
                           // console.log(" length ", tempformfollowed.length );
                            //console.log(" outer for ", tempformfollowed);
                        for(let ii in tempformfollowed){
                            /*for(let ee in tempformfollowed[ii]){
                                
                                console.log(ee,  " temp form followed ",tempformfollowed[ii][ee]);
                                tempformfollowed[ii][ee].hide = false;
                                tempformfollowed[ii][ee].validation.required = true;
                                
                            }
                            */
                           //console.log();
                           // console.log(tempform[tempformfollowed[ii]]);
                           // tempformfollowed[ii].config.hide = false;
                            tempform[tempformfollowed[ii]].hide = false;
                            tempform[tempformfollowed[ii]].validation.required = true;
                        }
                    }
                }else{
                    if(tempform[id].followed.length>0){
                        const tempformfollowed = [...tempform[id].followed];
                        //console.log(" outer for ", tempformfollowed);
                        for(let ii in tempformfollowed){
                            console.log( "temp form followed ",tempformfollowed[ii]);
                            /*for(let ee in tempformfollowed[ii]){
                                tempformfollowed[ii][ee].hide = true;
                                tempformfollowed[ii][ee].validation.required = false;
                            }
                            */
                            //tempformfollowed[ii].config.hide= true;
                            tempform[tempformfollowed[ii]].hide = true;
                            tempform[tempformfollowed[ii]].validation.required = false;
                        }
                    }
                }
            }
            else if(tempform[id].elementConfig.type === 'file'){
                //let options = [...tempform[id].elementConfig.options];
                tempform[id].value = event.target.value;
                tempform[id].touched = true;
                tempform[id].valid = true;
                if(event.target.value === 'account'){
                    if(tempform[id].followed.length>0){
                        const tempformfollowed = [...tempform[id].followed];

                        for(let ii in tempformfollowed){
                            //console.log( "temp form followed "+tempformfollowed[ii]);
                            //tempform[tempformfollowed[ii]].hide = false;
                        }
                    }
                }else{
                    if(tempform[id].followed.length>0){
                        const tempformfollowed = [...tempform[id].followed];

                        for(let ii in tempformfollowed){
                            //console.log( "temp form followed "+tempformfollowed[ii]);
                            //tempform[tempformfollowed[ii]].hide = true;
                        }
                    }
                }
            }
        }else if(tempform[id].elementType === 'select'){
            //console.log("Selected value ", event.target.value);
            tempform[id].value = event.target.value;
            if(tempform[id].value !== 'default'){
                tempform[id].valid = true;
            }
            else{
                tempform[id].valid = false;
            }
            tempform[id].touched = true;
        }else{
            for(let i in tempform){
                console.log("thi sis else on change chandler");    
                console.log(tempform.follewed.includes(id));

            }
        }
        this.setState({requestForm: tempform});
      
    }
    onChangeHandlerExtended = (event, id)=>{
        let tempform = {...this.state.extendedFile};
    }
    onChangeHandlerAttach=(event, id)=>{
        let tempform = {...this.state.attachedFile};
        let extendedform= {...this.state.extendedfile};
        if(tempform[id].elementType === 'input'){
            if(tempform[id].elementConfig.type ==='text'){
                tempform[id].value = event.target.value;
                tempform[id].touched = true;
                tempform[id].valid = this.checkValidity(event.target.value, tempform[id].validation);
            }else if(tempform[id].elementConfig.type === 'checkbox'){
                tempform[id].value = 'check';
                
                tempform[id].elementConfig.checked = !tempform[id].elementConfig.checked;
                tempform[id].valid = true;
                tempform[id].touched = true;
                if(tempform[id].elementConfig.checked){
                    if(tempform[id].followed.length>0){
                        const tempformfollowed = [...tempform[id].followed];

                        for(let ii in tempformfollowed){
                            console.log( "temp form followed ",tempformfollowed[ii]);
                            extendedform[tempformfollowed[ii]].hide = false;
                            extendedform[tempformfollowed[ii]].validation.required = true;
                        }
                    }
                }else{
                    if(tempform[id].followed.length>0){
                        const tempformfollowed = [...tempform[id].followed];

                        for(let ii in tempformfollowed){
                            console.log( "temp form followed ",tempformfollowed[ii]);
                            extendedform[tempformfollowed[ii]].hide = true;
                            extendedform[tempformfollowed[ii]].validation.required = false;
                        }
                    }
                }
            }
            else if(tempform[id].elementConfig.type === 'radio'){
                //let options = [...tempform[id].elementConfig.options];
                tempform[id].value = event.target.value;
                tempform[id].touched = true;
                tempform[id].valid = true;
                if(event.target.value === 'account'){
                    if(tempform[id].followed.length>0){
                        const tempformfollowed = [...tempform[id].followed];

                        for(let ii in tempformfollowed){
                            //console.log( "temp form followed ",ii);
                            console.log(ii);
                           // tempform[tempformfollowed[ii]].hide = false;
                           // tempform[tempformfollowed[ii]].validation.required = true;
                        }
                    }
                }else{
                    if(tempform[id].followed.length>0){
                        const tempformfollowed = [...tempform[id].followed];

                        for(let ii in tempformfollowed){
                            //console.log( "temp form followed ",ii);
                            console.log(ii);
                           // tempform[tempformfollowed[ii]].hide = true;
                            //tempform[tempformfollowed[ii]].validation.required = false;
                        }
                    }
                }
            }
            else if(tempform[id].elementConfig.type === 'file'){
                //let options = [...tempform[id].elementConfig.options];
                tempform[id].value = event.target.value;
                tempform[id].touched = true;
                tempform[id].valid = true;
                if(event.target.value === 'account'){
                    if(tempform[id].followed.length>0){
                        const tempformfollowed = [...tempform[id].followed];

                        for(let ii in tempformfollowed){
                            console.log( "temp form followed "+tempformfollowed[ii]);
                            tempform[tempformfollowed[ii]].hide = false;
                        }
                    }
                }else{
                    if(tempform[id].followed.length>0){
                        const tempformfollowed = [...tempform[id].followed];

                        for(let ii in tempformfollowed){
                            console.log( "temp form followed "+tempformfollowed[ii]);
                            tempform[tempformfollowed[ii]].hide = true;
                        }
                    }
                }
            }
        }else if(tempform[id].elementType === 'select'){
            console.log("Selected value ", event.target.value);
            tempform[id].value = event.target.value;
            if(tempform[id].value !== 'default'){
                tempform[id].valid = true;
            }
            else{
                tempform[id].valid = false;
            }
            tempform[id].touched = true;
        }else{

        }
        this.setState({attachedFile: tempform});
      
    }
    onSubmit=(event)=>{
       
        //console.log(this.state);
        let request = {...this.state.requestForm};
        let isValid = true;
        const errorlist = [];
        for(let i in request){
            if(request[i].validation.required ===true && request[i].valid === true){
                isValid = isValid && true;
            }else if(request[i].validation.required ===false){
                isValid = isValid && true;
            }
            else{
                isValid = isValid && false;
                errorlist.push(request[i]);
            }
        }
        let attached = {...this.state.attachedFile};
        for(let i in attached){
            if(attached[i].validation.required ===true && attached[i].valid === true){
                isValid = isValid && true;
            }else if(attached[i].validation.required ===false){
                isValid = isValid && true;
            }
            else{
                isValid = isValid && false;
                console.log("aldaa zaagdsan");
                errorlist.push(attached[i]);
            }
        }
        if(isValid){
            let requestForm = {...this.state.requestForm};
            alert("this is ok");
            let post = {
                nehemjlel:[], 
                geree: [], 
                zarlaga: []
            };
            post["nehemjlel"] = [];
            post.geree = [];
            post.zarlaga = [];
            post.name = requestForm.employeeName.value;
            post.albantushaalId = requestForm.albanTushaal.value;
            post.amount = requestForm.amount.value;
            post.fraction = 0;
            post.currencyId = requestForm.currency.value;
            post.amountletter = "this is test amount";
            post.paymentfor = requestForm.tulburiinZoriulalt.value;
            post.paymentType = requestForm.costType.value;
            if(requestForm.paymentType.value === "5c77b31a4284df28b488cce8"){
            //post. = ""
            post.tulburhelber = requestForm.paymentType.value;
            }else{
                post.tulburhelber = requestForm.paymentType.value;
                post.accountnumber = requestForm.accountNumber.value;
                
                post.accountType = requestForm.accountType.value;
                post.bank = requestForm.bank.value;
            }
            post.tusuvkod = requestForm.isTusviinKod.elementConfig.checked ? requestForm.tosviinKod.value: null;
           // if(requestForm.costType.value = )
            
            
            
           // for(let i in requestForm){
            //    nehemjlel: [], 
               // geree:
          //  }
            axios.post('http://localhost:5000/api/request/requestSend', post)
            .then(res=>{
                console.log("On submit success=========================");
                console.log(res);
                console.log(this.props);
                if(res.status === 200){
                    alert("SuccessFully registered");
                    //event.preventDefault();
                    this.props.history.push('/');
                }else{
                    
                    alert("Error occured");
                }
            });
        }else{
            event.preventDefault();
            alert('aldaa');
            console.log("state ", this.state);
            console.log(errorlist);
        }

    }
    render(){
        //console.log(this.state);
        let requestFormtemp = {...this.state.requestForm};
        const requestFormArray = [];
        for(let i in requestFormtemp){
            requestFormArray.push({id: i, config: requestFormtemp[i]});
        }
        let attachedFormtemp = {...this.state.attachedFile};
        const attachedFormArray = [];
        for(let i in attachedFormtemp){
            attachedFormArray.push({id: i, config: attachedFormtemp[i]});
        }
        //console.log(this.state.attachedFile);
        //console.log(this.state);
        let extendedFormtemp = {...this.state.extendedfile};
        //console.log(extendedFormtemp);
        const extendedFormArray = [];
        for(let i in extendedFormtemp){
            extendedFormArray.push({id: i, config: extendedFormtemp[i]});
        }
        return(
            <div className = {classes.Home}>
            <h2>Мөнгөн зарлагын зөвшөөрлийн хуудас</h2>
           
                <form onSubmit = {this.onSubmit}>
                    {requestFormArray.map(igkey =>{
                        return(
                                <FormElement  key = {igkey.id}
                                 id = {igkey.id} 
                                config = {igkey.config} 
                                changed = {(event)=>{this.onChangeHandler(event, igkey.id)}}
                                />
                            )
                    })}
                    <div className = {classes.AttachFormGroup}>
                            {attachedFormArray.map(igkey =>{
                                return(
                                    <FormElement  key = {igkey.id}
                                     id = {igkey.id} 
                                    config = {igkey.config} 
                                    changed = {(event)=>{this.onChangeHandlerAttach(event, igkey.id)}}
                                    />
                                )
                            })}
                    </div>
                    <div className = {classes.ExtendedFormGroup}>
                        {
                            extendedFormArray.map(igkey =>{
                                //console.log(igkey)
                                return(
                                    <div key = {igkey.id} className = {classes.ExtendedFormGroupDiv}>
                                        <FormElement  key = {igkey.id}
                                        id = {igkey.id} 
                                        config = {igkey.config} 
                                        changed = {(event)=>{this.onChangeHandlerExtended(event, igkey.id)}}
                                        />
                                    </div>   
                                )
                            })
                        }
                    </div>
                    <div className = {classes.HomeSendContainer}>
                        <button className = {classes.HomeSendButton}>Илгээх</button>
                    </div>
                    
                </form>

            </div>

        );

    }
}
export default Home;