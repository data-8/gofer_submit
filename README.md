# Submit Extension

This repo contains the code for a Jupyter notebook extension that sends the JSON of a .ipynb file as an HTML POST request.

Currently the repo assumes that you are running gofer_service (todo: insert link here to new repo) as a service of your jupyterhub.

However, for a Gofer service hosted externally, you will need to modify `gofer_submit/static/index.js` to send to the correct end point.

# Installation

Installing this package from pip should automatically install and enable the extension by default (following: https://jupyter-notebook.readthedocs.io/en/stable/examples/Notebook/Distributing%20Jupyter%20Extensions%20as%20Python%20Packages.html#Defining-the-server-extension-and-nbextension).

TODO upload to pypi to test whether pip install actually installs/enables properly

If you would like to have it installed but not enabled, simply run

`jupyter nbextension disable --py gofer_submit --sys-prefix`

# Customization

TODO figure how to modify the grading url without requiring changes to this repo.
