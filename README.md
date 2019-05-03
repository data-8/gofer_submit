# Submit Extension

This repo contains the code for a Jupyter notebook extension that sends the JSON of a .ipynb file as an HTML POST request.

The extension also includes a dropdown menu for course selection, which will modify the metadata course tag to support multiple courses on one hub.

Currently the repo assumes that you are running [gofer_service](https://github.com/data-8/gofer_service) as a service of your jupyterhub.

However, for a Gofer service hosted externally, you will need to modify `gofer_submit/static/index.js` to send to the correct end point.

# Installation

Installing this package from pip (or equivalently python setup.py) should automatically install and enable the extension by default (following: https://jupyter-notebook.readthedocs.io/en/stable/examples/Notebook/Distributing%20Jupyter%20Extensions%20as%20Python%20Packages.html#Defining-the-server-extension-and-nbextension).

If you would like to have it installed but not enabled, simply run

`jupyter nbextension disable --py gofer_submit --sys-prefix`

To build the extension and enable it,

`cd gofer_submit`

`jupyter nbextension install --sys-prefix static | jupyter nbextension enable --sys-prefix static/index`
