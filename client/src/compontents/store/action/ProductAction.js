import axios from "axios";

export const ProductAction = {
  ADD_PRODUCT: "AddProduct",
  PRODUCT_LOADED: "productloaded",
  LIKE_PRODUCT:"likeProduct",
  DISlIKE_PRODUCT:"dislikeproduct",
  HEART_PRODUCT:"heartproduct"
};

export const loadProducts = () => {
        return (dispatch, getState) => {
                axios.get("api/products/loadProduct").then(
                        res => {
                                dispatch({ type: ProductAction.PRODUCT_LOADED,   product: res.data.product, })
                                
                        }
                ).catch(
                        error => console.log(error)
                )
        }
}
