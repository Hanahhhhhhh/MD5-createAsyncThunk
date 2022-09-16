import {useDispatch, useSelector} from "react-redux";
import { useParams} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import {updateProductThunk} from "../services/thunk";
import {Form, Formik, Field} from "formik"
import {Link} from "react-router-dom";

export default function UpdateProduct() {
    const dispatch = useDispatch();
    let {id} = useParams();
    let navigate = useNavigate();

    let products = useSelector(state => {
        return state.product.products
    });

    let productUpdate = products.filter((product) => {
        return product.id == id
    })
    let handleUpdate = (values) => {
        dispatch(updateProductThunk(values))
        alert("Update product success !!!")
        navigate('/list');
    }
    return (

        <div>
            {console.log(productUpdate)}
            <Link to='/list'> Product List</Link>
            <Formik
                initialValues={
                    productUpdate[0]
                }
                enableReinitialize={true}
                onSubmit={(values) => {
                    handleUpdate(values)
                }}
            >
                <Form>
                    <h2>Update product</h2>
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
                    <br/>
                    <div className="row mx-md-n7">
                        <div className="row px-md-5"><div><button className='btn btn-primary' type={'submit'}>Edit</button></div></div>
                        <div className="row px-md-5"><div><Link to='/list'><button className= 'btn btn-secondary'>Cancel</button></Link></div></div>
                    </div>
                </Form>

            </Formik>


        </div>
    )
}