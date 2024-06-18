import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css'

export default function HomePage() {

    const [isActive, setIsActive] = useState('');

    const handleClick = (tab) => {
        setIsActive(tab);
    }

    const [prevButton, setPrevButton] = useState(false);
    const [nextButton, setNextButton] = useState(false);

    return (
        <div className='homepage'>
            <section className='featured-products container text-center py-5 outstanding-product'>
                <h2>SẢN PHẨM CHO BÉ MỚI VỀ</h2>
                <p>Nếu bạn còn băn khoăn khi lựa chọn sữa cho bé, hãy để MeBe giúp bạn nhé!</p>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="product-item">
                                    <img src="images/ao.pnj.webp" alt="Sản phẩm 1" className="img-fluid" />
                                    <h3>Sản phẩm 1</h3>
                                    <p>Giá: 500,000 VND</p>
                                    <a href="#" className="btn btn-outline-dark">Chi tiết</a>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="product-item">
                                    <img src="images/ao.pnj.webp" alt="Sản phẩm 1" className="img-fluid" />
                                    <h3>Sản phẩm 1</h3>
                                    <p>Giá: 500,000 VND</p>
                                    <a href="#" className="btn btn-outline-dark">Chi tiết</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='carousel-control-prev'>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </div>
                <div className='carousel-control-next'>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </div>
            </section>
        </div>
    )
}
