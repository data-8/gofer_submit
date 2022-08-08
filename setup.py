import setuptools

setuptools.setup(
    name="gofer_submit",
    description="python package for nbextension to be used with Gofer Grader",
    version='0.5',
    author="V. Su(Sean Morris - changed 8/8/2022)",
    author_email="sean.smorris@berkeley.edu",
    url="https://github.com/data-8/gofer_submit",
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
    zip_safe=False
)
