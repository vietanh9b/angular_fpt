

const submitBtn=document.querySelector('.submit')


const inputName=document.querySelector('.name')
const inputNamePar=document.querySelector('.name_par')
const inputNation=document.querySelector('.nation')
const inputBorn=document.querySelector('#born')
const inputID=document.querySelector('.id_user')
const inputReleaseDate=document.querySelector('.release_date')
const inputReleasePlace=document.querySelector('.release_place')
const inputPhoneCad=document.querySelector('.phone_cad')
const inputPhonePar=document.querySelector('.phone_par')
const inputEmail=document.querySelector('.email')
const backFace=document.querySelector('.back-face')
const frontFace=document.querySelector('.front-face')
const diploma=document.querySelector('.diploma')
const checkboxesPerson = document.getElementsByName('person');
const checkboxesAddress = document.getElementsByName('address');


const errorName=document.querySelector('.errorName')
const errorNamePar=document.querySelector('.error_name_par')
const errorNation=document.querySelector('.errorNation')
const errorBorn=document.querySelector('.errorBorn')
const errorID=document.querySelector('.errorID')
const errorReleaseDate=document.querySelector('.error_release_date')
const errorReleasePlace=document.querySelector('.error_release_place')
const errorPhonePar=document.querySelector('.error_phone_par')
const errorPhoneCad=document.querySelector('.error_phone_cad')
const errorEmail=document.querySelector('.error_email')
const errorFrontFace=document.querySelector('.error-front-face')
const errorBackFace=document.querySelector('.error-back-face')
const errorDiploma=document.querySelector('.error-diploma')
const errorAddress = document.querySelector('.error_address');
const errorPerson = document.querySelector('.error_person');

function previewImage(event,img) {
    var imagePreview = document.getElementById(img);
    var input = event.target;

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            imagePreview.style.display = 'block';
            imagePreview.src = e.target.result;
        }
        reader.readAsDataURL(input.files[0]);
    }
}

function checkPhone(input,error){
    const isRegex=/^0\d{9}$/
    if(!isRegex.test(input.value.trim())){
        error.innerHTML="Nhập sai số điện thoại"
    }else{
        error.innerHTML=""
    }
}
function checkID(){
    const idRegex=/^0\d{10}$/
    if (!idRegex.test(inputID.value.trim())) {
        errorID.innerHTML = "Sai định dạng id";
    }else{
        errorID.innerHTML = "";
    }
}
function checkNation(){
    if(inputNation.value.trim()==''){
        errorNation.innerHTML="Bạn phải nhập dân tộc"
    }else{
        errorNation.innerHTML=''
    }
}
function checkName(input,error){

    if(input.value.trim()==''){
        error.innerHTML="Bạn phải nhập tên"
    }else{
        error.innerHTML=''
    }
}

function checkDate(input,error){
    const dateRegex = /^\d{1,2}\/\d{1,2}\/\d{4}$/; // Định dạng yyyy-mm-dd
    const inputDate = input.value;
    
    if (!dateRegex.test(inputDate.trim())) {
        error.innerHTML = "Ngày không thể là ngày tương lai";
    } else {
        const dateRegex = /^\d{1,2}\/\d{1,2}\/\d{4}$/; // Định dạng dd/mm/yyyy

    if (!dateRegex.test(inputDate)) {
        error.innerHTML = "Nhập date chưa đúng định dạng";
    } else {
        const parts = inputDate.split('/');
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10);
        const year = parseInt(parts[2], 10);

        if (year < 1000 || year > 3000 || month == 0 || month > 12 || day == 0 || day > 31) {
            error.innerHTML = "Ngày không hợp lệ";
        } else if ((month == 4 || month == 6 || month == 9 || month == 11) && day > 30) {
            error.innerHTML = "Tháng này chỉ có tối đa 30 ngày";
        } else if (month == 2) {
            const isLeapYear = (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
            if ((isLeapYear && day > 29) || (!isLeapYear && day > 28)) {
                error.innerHTML = "Tháng 2 trong năm nhuận có tối đa 29 ngày, trong năm không nhuận có tối đa 28 ngày";
            } else {
                error.innerHTML = "";
            }
        } else {
            error.innerHTML = "";
        }
    }
    }
}
function checkEmail(){
    const isRegex=/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/
    if(!isRegex.test(inputEmail.value)){
        errorEmail.innerHTML="Nhập chưa đúng định dạng email"
    }else{
        errorEmail.innerHTML=""
    }
}

function checkReleasePlace(){
    if(inputReleasePlace.value==''){
        errorReleasePlace.innerHTML="Bạn phải nhập nơi cấp"
    }else{
        errorReleasePlace.innerHTML=''
    }
}

function checkFile(input,error){
    if(input.value==''){
        error.innerHTML="Phải tải ảnh lên"
    }else{
        error.innerHTML=""
    }
}

function updateCheckboxes(checkbox,name) {
    var checkboxes = document.getElementsByName(name);
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i] !== checkbox) {
            checkboxes[i].checked = false;
        }
    }
}

function validateForm(checkboxes,error) {
    var isChecked = false;
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            isChecked = true;
            break;
        }
    }
    if (!isChecked) {
        error.innerHTML="Bạn phải chọn checkbox"
        return false; // Ngăn form được gửi đi
    }
    return true; // Cho phép form được gửi đi
}

inputPhoneCad.addEventListener('keyup',()=>{checkPhone(inputPhoneCad,errorPhoneCad)})

inputPhonePar.addEventListener('keyup',()=>{checkPhone(inputPhonePar,errorPhonePar)})

inputEmail.addEventListener('keyup',()=>{checkEmail()})

inputID.addEventListener('keyup',()=>{checkID()})

inputNation.addEventListener('keyup',()=>{checkNation()})

inputName.addEventListener('keyup',()=>{checkName(inputName,errorName)})

inputNamePar.addEventListener('keyup',()=>{checkName(inputNamePar,errorNamePar)})

inputReleaseDate.addEventListener('keyup',()=>{checkDate(inputReleaseDate,errorReleaseDate)})

inputBorn.addEventListener('keyup',()=>{checkDate(inputBorn,errorBorn)})

inputReleasePlace.addEventListener('keyup',()=>{checkReleasePlace()})

submitBtn.addEventListener('click',()=>{
    validateForm(checkboxesAddress,errorAddress)
    validateForm(checkboxesPerson,errorPerson)
    checkFile(diploma,errorDiploma)
    checkFile(backFace,errorBackFace)
    checkFile(frontFace,errorFrontFace)
    checkPhone(inputPhoneCad,errorPhoneCad)
    checkPhone(inputPhonePar,errorPhonePar)
    checkEmail()
    checkID()
    checkNation()
    checkName(inputName,errorName)
    checkName(inputNamePar,errorNamePar)
    checkDate(inputBorn,errorBorn)
    checkDate(inputReleaseDate,errorReleaseDate)
    checkReleasePlace()
    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;
})

// console.log(diploma)
// const receive=document.getElementsByName('person')
// // console.log(receive);
// function checkbox(receive,type) {
//     let checkboxes = document.getElementsByName(type);
//     for (var i = 0; i < checkboxes.length; i++) {
//         if (checkboxes[i] !== checkbox) {
//             checkboxes[i].checked = false;
//         }
//     }
// }

// const allProvince=n;
// const inputProvince=document.querySelector('.province')
// const valueProvince=inputProvince.value
// valueProvince.innerHTML=allProvince.map((currentValue, index)=>{
//     console.log(currentValue.name);
//     return currentValue.name
// })