import React,{useRef} from 'react'
export default function FormSearch() {
const textKw = React.useRef()
const btOk = React.createRef()
const onChangeKw = () => {
if (textKw.current.value.trim() !== '') {
btOk.current.disabled = false
} else {
btOk.current.disabled = true
}
}
return (
    <div style={{margin:'30px'}}>
    <form>
        <center>
        <div className="mt-3 mx-auto p-3" style={{ width: '400px', background: '#cee' }}>
      <div className="form-group mb-2">
      <input
          type="text"
          id="login"
          name="kw"
          maxLength="20"
          placeholder="ค้นหา"
          ref={textKw}
          onInput={onChangeKw} // or onChange if you prefer
          className="form-control form-control-sm"
        />
        <br></br>
        <button type="button" ref={btOk} className="btn btn-primary" disabled>ตกลง</button>
    </div>
    </div>
    </center>
    </form>
    </div>

)
}
    
    