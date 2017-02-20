class operation {
    add(a:number, b:number):number { return Number.parseFloat(a)+Number.parseFloat(b); };
    sub(a:number, b:number):number { return Number.parseFloat(a)-Number.parseFloat(b); };
    mul(a:number, b:number):number { return Number.parseFloat(a)*Number.parseFloat(b); };
    div(a:number, b:number):number { return Number.parseFloat(a)/Number.parseFloat(b); };
}

class calculator extends operation {
    constructor(
        private num_value1:number=0,
        private num_value2:number=0,
        private tmp_value: number=0,
        private oper_value: string=null
    ) {
        super();
    }

    setOperation(getValue:string) {
        let oper_result = 0;
        if(this.oper_value) {
            if(getValue == "=") {
                switch(this.oper_value) {
                    case '+' : 
                        oper_result = this.add(this.num_value1, this.num_value2); 
                        break;
                    case '-' : 
                        oper_result = this.sub(this.num_value1, this.num_value2); 
                        break;
                    case 'X' : 
                        oper_result = this.mul(this.num_value1, this.num_value2);
                        break;
                    case '/' : 
                        oper_result = this.div(this.num_value1, this.num_value2);
                        break;
                    default:
                        break;
                }
                console.log(oper_result);
                
                this.num_value1 = 0;
                this.num_value2 = 0;
                this.oper_value = null;
            } else {
                switch(this.oper_value) {
                    case '+' : 
                        oper_result = this.add(this.num_value1, this.num_value2); 
                        break;
                    case '-' : 
                        oper_result = this.sub(this.num_value1, this.num_value2); 
                        break;
                    case 'X' : 
                        oper_result = this.mul(this.num_value1, this.num_value2);
                        break;
                    case '/' : 
                        oper_result = this.div(this.num_value1, this.num_value2);
                        break;
                    default:
                        break;
                }

                this.oper_value = getValue;
                this.num_value1 = oper_result;
                this.num_value2 = 0;
            }
        } else {
            this.oper_value = getValue;
            console.log("Not Exist"+this.oper_value);
            oper_result = this.num_value1;
        }
        
        return oper_result;
    }

    setNumber(getValue:number) {
        if (this.oper_value) {
            //Exist operation
            if(this.num_value2 != 0) {
                this.num_value2 += getValue;
            } else {
                this.num_value2 = getValue;
            }
            return this.num_value2;
        } else {
            //Not Exist operation
            if(this.num_value1 != 0) {
                this.num_value1 += getValue;
            } else {
                this.num_value1 = getValue;
            }
            return this.num_value1;
        }
    }

    init(){
        this.num_value1 = 0;
        this.num_value2 = 0;
        this.tmp_value = 0;
        this.oper_value = null;

        return 0;
    }
}

let calc_operation:calculator = new calculator(0, 0, 0, null);
let return_value;

function click_num(num_val:number) {
    return_value = calc_operation.setNumber(num_val);
    document.getElementById("result_view").textContent = return_value.toString();
}

function click_oper(oper_value:string) {
    return_value = calc_operation.setOperation(oper_value);
    document.getElementById("result_view").textContent = return_value.toString();
}

function click_init() {
    return_value = calc_operation.init();
    document.getElementById("result_view").textContent = return_value.toString();
}