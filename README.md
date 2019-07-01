This is the vuepress project of building a static documentation website for FastEstimator

# How to build/show the website
## requirement 
* vuepress

## show the wbesite
in our vuepress website directory (fastestimator)

``` bash 
(fastestimator)$ vuepress dev
```

# How to generate the API docs
## requirement 
* sphinx
* sphinx-markdown-builder(https://github.com/codejamninja/sphinx-markdown-builder/)

## step 1
download the docs directory in this repository in the same folder with fastestimator(source code directory) like following graph
```
- mother directory
|-- fastestimator
|-- docs
```

## step 2 
go to the doc directory and input
```
(docs)$ make markdown 
```

## step 3
the genearted markdown file will be in /docs/_build/markdown/




