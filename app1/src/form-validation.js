import React from 'react'
import { useForm } from ………………………………………
export default function FormValidation() {
const cats = [['100', 'ไอที'], ['200', 'เครื่องจักรกล'], ['300', 'เคมีภัณฑ์']]
const opts = ['Option 1', 'Option 2', 'Option 3']
const inputFile = React.createRef()
const {register, handleSubmit, formState: {errors}} = ……………………….
const onSubmitForm = (event) => { 
let maxNumFiles = 3
let maxSize = 300
if (inputFile.current.files.length > …………………………………………) {
alert(`เลือกได้ไม่เกิน ${maxNumFiles} ไฟล์`)
event.preventDefault()
return
} 
for (let f of inputFile.current.files) {
if (f.size > maxSize * 1000) {
alert(`...................................................................................`)
event.preventDefault()
return
}
} 
}
const …………………….. = {
    fontSize: 'smaller',
    color: 'red'
    }
    return (
    <div className="mt-3 mb-5 mx-auto p-3 rounded"
    style={{ width:'400px', background:'#cee'}}>
    <form onSubmit={…………………………………………………………….……}>
    <div className="form-group mb-3">
    <label htmlFor="cats" className="……………………">หมวดหมู่ *</label>
    <select id="cats" className="form-select form-select-sm">
{
cats.map(item => {
return <option value={item[0]}>{…………………..}</option>
})
}
</select>
</div>
<div className="form-group mb-3">
<label htmlFor="name">ชื่อสินค้า *</label>
<input type="text" id="name" name="name" maxLength="50"
className="form-control form-control-sm"
{...register('name', {required: true, maxLength: 30})} />
{errors.name && <div style={err}>กรุณาระบุชื่อสินค้า</div>}
</div>
<div className="form-group mb-3">
<label htmlFor="price">ราคาสินค้า *</label>
<input type="number" id="price" name="price" min="0" step="any"
className="form-control form-control-sm"
{...register('price', {validate: value => parseFloat(value) > 0}) } />
{errors.price && <div style={err}>……………………………………………………</div>}
</div>
<div className="form-group mb-3">
<label htmlFor="detail">รายละเอียดสินค้า *</label>
<textarea id="detail" name="detail" rows="2" maxLength="250"
className="form-control form-control-sm"
{…………………..('detail', { required: true, minLength: 1, maxLength: 200})}>
</textarea>
{…………………………………………………………………………………………………………}
</div>
<div className="……………………………………">
<label htmlFor=“dateAdded">วันที่เพิ่มสินค้า *</label>
<input type="…………….." id="dateAdded" name="dateAdded"
className="…………………………………………………………………"/>
</div>
<div className="form-group mb-3">
<label htmlFor="file" className="form-label">ภาพสินค้า * (ไม่เกิน 3 ไฟล์ 
ขนาดสูงสุด 300 KB/ไฟล์)</label>
<input type="…………….." id="file" accept="image/*"
className="form-control form-control-sm" ref={……………} multiple/>
</div>
<div>…………………………….</div>
{
opts.map((opt, i) => {
return (
<div className="form-check form-check-inline mb-2">
<input type="………………………" id={'opt'+i} value={opt}
className="form-check-input"/>
<label htmlFor={'opt'+i} className="form-check-label">{……….}</label>
</div>
)
})
}