import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addProductThunk} from "../services/thunk";
import {Field, Form, Formik} from "formik";

export default function CreateProduct(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleCreate = (data) => {
        dispatch(addProductThunk(data))
        alert("Add new success !!!")
        navigate('/list')
    }

    return(
        <Formik
            initialValues={{
                name:'',
                price:'',
                stock:''
            }}
            onSubmit={(values => {
                handleCreate(values)
            })}
        >
            {/*<Form>*/}
            {/*    <h2>Create product</h2>*/}
            {/*    <label htmlFor="name">Name</label>*/}
            {/*    <Field name="name"></Field>*/}
            {/*    <br/>*/}
            {/*    <label htmlFor="price">Price</label>*/}
            {/*    <Field name="price"></Field>*/}
            {/*    <br/>*/}
            {/*    <label htmlFor="stock">Stock</label>*/}
            {/*    <Field name="stock"></Field>*/}
            {/*    <br/>*/}
            {/*    <label htmlFor="description">Description</label>*/}
            {/*    <Field name="description"></Field>*/}
            {/*    <br/>*/}
            {/*    <button>Add product</button>*/}
            {/*</Form>*/}
            <Form>
                <h2>Add Product</h2>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <Field type="text" className="form-control" name='name' placeholder="Name"/>
                </div>
                <div className="row">
                    <div className="col">
                        <label htmlFor="price">Price</label>
                        <Field type="text" className="form-control" placeholder="Price" name='price'/>
                    </div>
                    <div className="col">
                        <label htmlFor="stock">Stock</label>
                        <Field type="text" className="form-control" placeholder="Stock" name='stock'/>
                    </div>
                </div>
                {/*<div className="form-group">*/}
                {/*    <label htmlFor="description">Description</label>*/}
                {/*    <Field type="text" className="form-control" placeholder="Description" name='description'/>*/}
                {/*</div>*/}
                <br/>
                <div className="row mx-md-n7">
                    <div className="row px-md-5"><div><button className='btn btn-primary'>ADD</button></div></div>
                    <div className="row px-md-5"><div><Link to='/list'><button className= 'btn btn-secondary'>Cancel</button></Link></div></div>
                </div>
            </Form>
        </Formik>
    )


}