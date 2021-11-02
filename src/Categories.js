import React from 'react';
import './Categories.css';

function Categories() {
    return (
        <div className="categories">
            <table>
                <tr>
                    <td>
                        <img src="https://www.depop.com/static/trend-slider/y2k/y2k@2x.jpg" alt="" />
                        <div className="categories__title">
                            Y2K
                            <button>
                                Shop now
                            </button>
                        </div>
                    </td>
                    <td>
                        <img src="https://www.depop.com/static/trend-slider/vintage-tshirts/vintage-tshirts@2x.jpg" alt="" />
                        <div className="categories__title">
                            Vintage T-shirts
                            <button>
                                Shop now
                            </button>
                        </div>
                    </td>
                    <td>
                        <img src="https://www.depop.com/static/trend-slider/sneakers/sneakers@2x.jpg" alt="" />
                        <div className="categories__title">
                            Sneakers
                            <button>
                                Shop now
                            </button>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Categories
