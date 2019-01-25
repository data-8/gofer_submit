def _jupyter_nbextension_paths():
    return [dict(
        section="notebook",
        src="static",
        dest="gofer_submit",
        require="gofer_submit/static/index")]
