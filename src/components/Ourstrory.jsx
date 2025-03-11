import React from 'react'

function Ourstrory({sectionTitle, storyHeadline, storyDescription,storyBtnTitle,storyBtnLink, storyImage }) {
    return (
        <div className='out-story-section'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="story-img-part">
                            <img className='story-img' src={storyImage} alt="" />
                        </div>
                    </div>
                    <div className="story-content-part col-lg-6 col-12">
                        <div className="story-content">
                            <h3 className='section-title'>{sectionTitle}</h3>
                            <p className='story-headline'>{storyHeadline}</p>
                            <p className='story-des'>{storyDescription}</p>
                            <a className='readbtn' href={storyBtnLink}>{storyBtnTitle}</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Ourstrory