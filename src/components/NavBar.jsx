function NavBar(){
    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand" href="#">Unplanned</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Hoodies</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Coming In</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Be Yours</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <button type="button" class="btn btn-light">Buy Now</button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar