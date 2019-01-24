import setuptools

setuptools.setup(
    name="gofer_submit",
    # TODO: Figure out anything else that needs to go here
    include_package_data=True,
    data_files=[
        # like `jupyter nbextension install --sys-prefix`
        ("share/jupyter/nbextensions/gofer_submit", [
            "gofer_submit/static/index.js",
        ]),
        # like `jupyter nbextension enable --sys-prefix`
        ("etc/jupyter/nbconfig/notebook.d", [
            "jupyter-config/nbconfig/notebook.d/gofer_submit.json"
        ])
    ],
    # TODO: Figure out anything else that needs to go here
    zip_safe=False
)
