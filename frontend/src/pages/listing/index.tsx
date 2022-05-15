import MovieCard from "components/MovieCard"
import Pagination from "components/Pagination"


function listing() {
    return (
        <>
            <Pagination />


        <div className="container">
        <div className='row'>
            <div className="col-sm-6">
            <MovieCard />
            </div>
            <div className="col-sm-6">
            <MovieCard />
            </div>
            <div className="col-sm-6">
            <MovieCard />
            </div>
            <div className="col-sm-6">
            <MovieCard />
            </div>
            <div className="col-sm-6">
            <MovieCard />
            </div>
        </div>
        </div>



        </>
    )

}

export default listing