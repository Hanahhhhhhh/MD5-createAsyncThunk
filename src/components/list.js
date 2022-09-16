import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {deleteProductThunk, getAllProductThunk} from "../services/thunk";
import {Link} from "react-router-dom"
export default function ListProduct() {

    const dispatch = useDispatch();
    let {products} = useSelector((data) => data.product);

    useEffect(() => {
        dispatch(getAllProductThunk())

    }, [])

    const handleDelete = (id) => {
        dispatch(deleteProductThunk(id))
    }
    return (
        <div >
            <div className="d-flex justify-content-between align-items-center">
                <h2>List Product</h2>
                <Link to="/create" ><button className="btn btn-primary">Create Product</button></Link>
            </div>


            <table className="table table-striped table-bordered ">
                <thead>

                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Stock</th>
                    {/*<th>Description</th>*/}
                    <th colSpan='2'>Action</th>
                </tr>
                </thead>
                <tbody>
                {products?.map((product, index) => (
                    <tr key={index}>
                        <td>{index}</td>
                        <td><Link to={`/detail/${product.id}`}>{product.name}</Link></td>
                        <td>{product.price}</td>
                        <td>{product.stock}</td>
                        {/*<td>{product.description}</td>*/}
                        <td>
                            <Link to={`/edit/${product.id}`} className="btn btn-primary"

                            >
                                Edit

                            </Link>

                            <button className="btn btn-danger" onClick={() => {
                                {
                                    handleDelete(product.id)
                                }

                            }}
                            >
                                Delete

                            </button>

                        </td>

                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )

}