import React from 'react';
import './OurFeature.css';

const OurFeature = () => {
    return (
        <>
         {/* our feature section */}
        <section>
            <h4 className='text-center'>Our Feature</h4>
            <p className='text-center'>this very extraordinary feature, can make learning activities more efficient.</p>
            <div className='d-grid our-feature-content'>
                <div className='d-grid our-feature-img'>
                    <div><img className='w-100' src="https://media.istockphoto.com/photos/portrait-young-confident-smart-asian-businessman-look-at-camera-and-picture-id1288538088?b=1&k=20&m=1288538088&s=170667a&w=0&h=3efMku7kSXUhpVrErAVVgxp6G91tRZ_5seygOn68RnE=" alt="" />
                    <button className='our-feature-btn1'>Present</button>
                    <button className='our-feature-btn2'>Call</button>
                    </div>
                    <div>
                        <div className='mb-3'><img className='w-100' src="https://cdn.pixabay.com/photo/2017/11/02/14/26/model-2911329__340.jpg" alt="" /></div>
                        <div><img className='w-100' src="https://cdn.pixabay.com/photo/2019/07/13/11/45/black-professional-4334648__340.jpg" alt="" /></div>
                    </div>
                    <div>
                        <div className='mb-3'><img className='w-100' src="https://cdn.pixabay.com/photo/2018/07/25/08/58/business-3560916__340.jpg" alt="" /></div>
                        <div><img className='w-100' src="https://cdn.pixabay.com/photo/2017/09/21/19/06/woman-2773007__340.jpg" alt="" /></div>
                    </div>
                </div>
                <div>
                    <h4>A user interface designed for the classroom</h4>
                    <div>
                        <img src="" alt="" />
                        <p>Teachers don't get lost in the grid view and have a dedicated Prodium spare</p>
                    </div>
                    <div>
                        <p>TA's and presenters can be move to the front of the class.</p>
                    </div>
                    <div>
                        <p>Teachers can see easily all students and class data at one time</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default OurFeature;