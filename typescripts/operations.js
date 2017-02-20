var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var operation = (function () {
    function operation() {
    }
    operation.prototype.add = function (a, b) { return Number.parseFloat(a) + Number.parseFloat(b); };
    ;
    operation.prototype.sub = function (a, b) { return Number.parseFloat(a) - Number.parseFloat(b); };
    ;
    operation.prototype.mul = function (a, b) { return Number.parseFloat(a) * Number.parseFloat(b); };
    ;
    operation.prototype.div = function (a, b) { return Number.parseFloat(a) / Number.parseFloat(b); };
    ;
    return operation;
}());
var calculator = (function (_super) {
    __extends(calculator, _super);
    function calculator(num_value1, num_value2, tmp_value, oper_value) {
        if (num_value1 === void 0) { num_value1 = 0; }
        if (num_value2 === void 0) { num_value2 = 0; }
        if (tmp_value === void 0) { tmp_value = 0; }
        if (oper_value === void 0) { oper_value = null; }
        var _this = _super.call(this) || this;
        _this.num_value1 = num_value1;
        _this.num_value2 = num_value2;
        _this.tmp_value = tmp_value;
        _this.oper_value = oper_value;
        return _this;
    }
    calculator.prototype.setOperation = function (getValue) {
        var oper_result = 0;
        if (this.oper_value) {
            if (getValue == "=") {
                switch (this.oper_value) {
                    case '+':
                        oper_result = this.add(this.num_value1, this.num_value2);
                        break;
                    case '-':
                        oper_result = this.sub(this.num_value1, this.num_value2);
                        break;
                    case 'X':
                        oper_result = this.mul(this.num_value1, this.num_value2);
                        break;
                    case '/':
                        oper_result = this.div(this.num_value1, this.num_value2);
                        break;
                    default:
                        break;
                }
                console.log(oper_result);
                this.num_value1 = 0;
                this.num_value2 = 0;
                this.oper_value = null;
            }
            else {
                switch (this.oper_value) {
                    case '+':
                        oper_result = this.add(this.num_value1, this.num_value2);
                        break;
                    case '-':
                        oper_result = this.sub(this.num_value1, this.num_value2);
                        break;
                    case 'X':
                        oper_result = this.mul(this.num_value1, this.num_value2);
                        break;
                    case '/':
                        oper_result = this.div(this.num_value1, this.num_value2);
                        break;
                    default:
                        break;
                }
                this.oper_value = getValue;
                this.num_value1 = oper_result;
                this.num_value2 = 0;
            }
        }
        else {
            this.oper_value = getValue;
            console.log("Not Exist" + this.oper_value);
            oper_result = this.num_value1;
        }
        return oper_result;
    };
    calculator.prototype.setNumber = function (getValue) {
        if (this.oper_value) {
            //Exist operation
            if (this.num_value2 != 0) {
                this.num_value2 += getValue;
            }
            else {
                this.num_value2 = getValue;
            }
            return this.num_value2;
        }
        else {
            //Not Exist operation
            if (this.num_value1 != 0) {
                this.num_value1 += getValue;
            }
            else {
                this.num_value1 = getValue;
            }
            return this.num_value1;
        }
    };
    calculator.prototype.init = function () {
        this.num_value1 = 0;
        this.num_value2 = 0;
        this.tmp_value = 0;
        this.oper_value = null;
        return 0;
    };
    return calculator;
}(operation));
var calc_operation = new calculator(0, 0, 0, null);
var return_value;
function click_num(num_val) {
    return_value = calc_operation.setNumber(num_val);
    document.getElementById("result_view").textContent = return_value.toString();
}
function click_oper(oper_value) {
    return_value = calc_operation.setOperation(oper_value);
    document.getElementById("result_view").textContent = return_value.toString();
}
function click_init() {
    return_value = calc_operation.init();
    document.getElementById("result_view").textContent = return_value.toString();
}
