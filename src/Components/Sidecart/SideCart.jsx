import React from 'react';
 
const SideCart = ( props) => {
         console.log(props.length) 
         
        return (
     <div className='setP'>
                        <div className='card mx-auto mt-2 p-3'>
                                <h5 className='fw-bold text-primary'>Spent time on read : {props.time} mins </h5>
                        </div>
                <div className=' bg-info mt-3'>
                       <h4 className='text-center'>Bookmarked Blogs : {props.length}</h4>
                       <h5 className=' p-2'>{props.blogs[0]} <br /></h5>
                       <h5 className=' p-2'>{props.blogs[1]} <br /></h5>
                       <h5 className=' p-2'>{props.blogs[2]} <br /></h5>
                       <h5 className=' p-2'>{props.blogs[3]} <br /></h5>
                       <h5 className=' p-2'>{props.blogs[4]} <br /></h5>
                       <h5 className=' p-2'>{props.blogs[5]} <br /></h5>
                       <h5 className=' p-2'>{props.blogs[6]} <br /></h5>
                       <h5 className=' p-2'>{props.blogs[7]} <br /></h5>
                       <h5 className=' p-2'>{props.blogs[8]} <br /></h5>
                       <h5 className=' p-2'>{props.blogs[9]} <br /></h5>
                       <h5 className=' p-2'>{props.blogs[10]}<br /></h5>
                       <h5 className=' p-2'>{props.blogs[11]}<br /></h5>
                       <h5 className=' p-2'>{props.blogs[9]} <br /></h5>
                       <h5 className=' p-2'>{props.blogs[10]}<br /></h5>
                       <h5 className=' p-2'>{props.blogs[11]}<br /></h5>
               
                       

                </div>
   </div>
        );
};

export default SideCart;