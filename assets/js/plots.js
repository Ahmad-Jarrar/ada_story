// Smartphone bar plot of brands with most model


window.PLOTLYENV = window.PLOTLYENV || {};
if (document.getElementById("smartphone_plot_most_models")) {
    Plotly.newPlot("smartphone_plot_most_models", [{
        "alignmentgroup": "True",
        "hovertemplate": "variable=Models<br>value=%{x}<br>Brand=%{y}<extra></extra>",
        "legendgroup": "Models",
        "marker": {
            "color": "#636efa",
            "pattern": {
                "shape": ""
            }
        },
        "name": "Models",
        "offsetgroup": "Models",
        "orientation": "h",
        "showlegend": true,
        "textposition": "auto",
        "x": [253, 253, 262, 279, 296, 335, 342, 392, 551, 995],
        "xaxis": "x",
        "y": ["ZTE", "Sony", "Micromax", "Huawei", "BLU", "alcatel", "Motorola", "Nokia", "LG", "Samsung"],
        "yaxis": "y",
        "type": "bar"
    }], {
        "barmode": "relative",
        "legend": {
            "title": {
                "text": "variable"
            },
            "tracegroupgap": 0
        },
        "showlegend": false,
        "template": {
            "data": {
                "barpolar": [{
                    "marker": {
                        "line": {
                            "color": "#E5ECF6",
                            "width": 0.5
                        },
                        "pattern": {
                            "fillmode": "overlay",
                            "size": 10,
                            "solidity": 0.2
                        }
                    },
                    "type": "barpolar"
                }],
                "bar": [{
                    "error_x": {
                        "color": "#2a3f5f"
                    },
                    "error_y": {
                        "color": "#2a3f5f"
                    },
                    "marker": {
                        "line": {
                            "color": "#E5ECF6",
                            "width": 0.5
                        },
                        "pattern": {
                            "fillmode": "overlay",
                            "size": 10,
                            "solidity": 0.2
                        }
                    },
                    "type": "bar"
                }],
                "carpet": [{
                    "aaxis": {
                        "endlinecolor": "#2a3f5f",
                        "gridcolor": "white",
                        "linecolor": "white",
                        "minorgridcolor": "white",
                        "startlinecolor": "#2a3f5f"
                    },
                    "baxis": {
                        "endlinecolor": "#2a3f5f",
                        "gridcolor": "white",
                        "linecolor": "white",
                        "minorgridcolor": "white",
                        "startlinecolor": "#2a3f5f"
                    },
                    "type": "carpet"
                }],
                "choropleth": [{
                    "colorbar": {
                        "outlinewidth": 0,
                        "ticks": ""
                    },
                    "type": "choropleth"
                }],
                "contourcarpet": [{
                    "colorbar": {
                        "outlinewidth": 0,
                        "ticks": ""
                    },
                    "type": "contourcarpet"
                }],
                "contour": [{
                    "colorbar": {
                        "outlinewidth": 0,
                        "ticks": ""
                    },
                    "colorscale": [
                        [0.0, "#0d0887"],
                        [0.1111111111111111, "#46039f"],
                        [0.2222222222222222, "#7201a8"],
                        [0.3333333333333333, "#9c179e"],
                        [0.4444444444444444, "#bd3786"],
                        [0.5555555555555556, "#d8576b"],
                        [0.6666666666666666, "#ed7953"],
                        [0.7777777777777778, "#fb9f3a"],
                        [0.8888888888888888, "#fdca26"],
                        [1.0, "#f0f921"]
                    ],
                    "type": "contour"
                }],
                "heatmapgl": [{
                    "colorbar": {
                        "outlinewidth": 0,
                        "ticks": ""
                    },
                    "colorscale": [
                        [0.0, "#0d0887"],
                        [0.1111111111111111, "#46039f"],
                        [0.2222222222222222, "#7201a8"],
                        [0.3333333333333333, "#9c179e"],
                        [0.4444444444444444, "#bd3786"],
                        [0.5555555555555556, "#d8576b"],
                        [0.6666666666666666, "#ed7953"],
                        [0.7777777777777778, "#fb9f3a"],
                        [0.8888888888888888, "#fdca26"],
                        [1.0, "#f0f921"]
                    ],
                    "type": "heatmapgl"
                }],
                "heatmap": [{
                    "colorbar": {
                        "outlinewidth": 0,
                        "ticks": ""
                    },
                    "colorscale": [
                        [0.0, "#0d0887"],
                        [0.1111111111111111, "#46039f"],
                        [0.2222222222222222, "#7201a8"],
                        [0.3333333333333333, "#9c179e"],
                        [0.4444444444444444, "#bd3786"],
                        [0.5555555555555556, "#d8576b"],
                        [0.6666666666666666, "#ed7953"],
                        [0.7777777777777778, "#fb9f3a"],
                        [0.8888888888888888, "#fdca26"],
                        [1.0, "#f0f921"]
                    ],
                    "type": "heatmap"
                }],
                "histogram2dcontour": [{
                    "colorbar": {
                        "outlinewidth": 0,
                        "ticks": ""
                    },
                    "colorscale": [
                        [0.0, "#0d0887"],
                        [0.1111111111111111, "#46039f"],
                        [0.2222222222222222, "#7201a8"],
                        [0.3333333333333333, "#9c179e"],
                        [0.4444444444444444, "#bd3786"],
                        [0.5555555555555556, "#d8576b"],
                        [0.6666666666666666, "#ed7953"],
                        [0.7777777777777778, "#fb9f3a"],
                        [0.8888888888888888, "#fdca26"],
                        [1.0, "#f0f921"]
                    ],
                    "type": "histogram2dcontour"
                }],
                "histogram2d": [{
                    "colorbar": {
                        "outlinewidth": 0,
                        "ticks": ""
                    },
                    "colorscale": [
                        [0.0, "#0d0887"],
                        [0.1111111111111111, "#46039f"],
                        [0.2222222222222222, "#7201a8"],
                        [0.3333333333333333, "#9c179e"],
                        [0.4444444444444444, "#bd3786"],
                        [0.5555555555555556, "#d8576b"],
                        [0.6666666666666666, "#ed7953"],
                        [0.7777777777777778, "#fb9f3a"],
                        [0.8888888888888888, "#fdca26"],
                        [1.0, "#f0f921"]
                    ],
                    "type": "histogram2d"
                }],
                "histogram": [{
                    "marker": {
                        "pattern": {
                            "fillmode": "overlay",
                            "size": 10,
                            "solidity": 0.2
                        }
                    },
                    "type": "histogram"
                }],
                "mesh3d": [{
                    "colorbar": {
                        "outlinewidth": 0,
                        "ticks": ""
                    },
                    "type": "mesh3d"
                }],
                "parcoords": [{
                    "line": {
                        "colorbar": {
                            "outlinewidth": 0,
                            "ticks": ""
                        }
                    },
                    "type": "parcoords"
                }],
                "pie": [{
                    "automargin": true,
                    "type": "pie"
                }],
                "scatter3d": [{
                    "line": {
                        "colorbar": {
                            "outlinewidth": 0,
                            "ticks": ""
                        }
                    },
                    "marker": {
                        "colorbar": {
                            "outlinewidth": 0,
                            "ticks": ""
                        }
                    },
                    "type": "scatter3d"
                }],
                "scattercarpet": [{
                    "marker": {
                        "colorbar": {
                            "outlinewidth": 0,
                            "ticks": ""
                        }
                    },
                    "type": "scattercarpet"
                }],
                "scattergeo": [{
                    "marker": {
                        "colorbar": {
                            "outlinewidth": 0,
                            "ticks": ""
                        }
                    },
                    "type": "scattergeo"
                }],
                "scattergl": [{
                    "marker": {
                        "colorbar": {
                            "outlinewidth": 0,
                            "ticks": ""
                        }
                    },
                    "type": "scattergl"
                }],
                "scattermapbox": [{
                    "marker": {
                        "colorbar": {
                            "outlinewidth": 0,
                            "ticks": ""
                        }
                    },
                    "type": "scattermapbox"
                }],
                "scatterpolargl": [{
                    "marker": {
                        "colorbar": {
                            "outlinewidth": 0,
                            "ticks": ""
                        }
                    },
                    "type": "scatterpolargl"
                }],
                "scatterpolar": [{
                    "marker": {
                        "colorbar": {
                            "outlinewidth": 0,
                            "ticks": ""
                        }
                    },
                    "type": "scatterpolar"
                }],
                "scatter": [{
                    "fillpattern": {
                        "fillmode": "overlay",
                        "size": 10,
                        "solidity": 0.2
                    },
                    "type": "scatter"
                }],
                "scatterternary": [{
                    "marker": {
                        "colorbar": {
                            "outlinewidth": 0,
                            "ticks": ""
                        }
                    },
                    "type": "scatterternary"
                }],
                "surface": [{
                    "colorbar": {
                        "outlinewidth": 0,
                        "ticks": ""
                    },
                    "colorscale": [
                        [0.0, "#0d0887"],
                        [0.1111111111111111, "#46039f"],
                        [0.2222222222222222, "#7201a8"],
                        [0.3333333333333333, "#9c179e"],
                        [0.4444444444444444, "#bd3786"],
                        [0.5555555555555556, "#d8576b"],
                        [0.6666666666666666, "#ed7953"],
                        [0.7777777777777778, "#fb9f3a"],
                        [0.8888888888888888, "#fdca26"],
                        [1.0, "#f0f921"]
                    ],
                    "type": "surface"
                }],
                "table": [{
                    "cells": {
                        "fill": {
                            "color": "#EBF0F8"
                        },
                        "line": {
                            "color": "white"
                        }
                    },
                    "header": {
                        "fill": {
                            "color": "#C8D4E3"
                        },
                        "line": {
                            "color": "white"
                        }
                    },
                    "type": "table"
                }]
            },
            "layout": {
                "annotationdefaults": {
                    "arrowcolor": "#2a3f5f",
                    "arrowhead": 0,
                    "arrowwidth": 1
                },
                "autotypenumbers": "strict",
                "coloraxis": {
                    "colorbar": {
                        "outlinewidth": 0,
                        "ticks": ""
                    }
                },
                "colorscale": {
                    "diverging": [
                        [0, "#8e0152"],
                        [0.1, "#c51b7d"],
                        [0.2, "#de77ae"],
                        [0.3, "#f1b6da"],
                        [0.4, "#fde0ef"],
                        [0.5, "#f7f7f7"],
                        [0.6, "#e6f5d0"],
                        [0.7, "#b8e186"],
                        [0.8, "#7fbc41"],
                        [0.9, "#4d9221"],
                        [1, "#276419"]
                    ],
                    "sequential": [
                        [0.0, "#0d0887"],
                        [0.1111111111111111, "#46039f"],
                        [0.2222222222222222, "#7201a8"],
                        [0.3333333333333333, "#9c179e"],
                        [0.4444444444444444, "#bd3786"],
                        [0.5555555555555556, "#d8576b"],
                        [0.6666666666666666, "#ed7953"],
                        [0.7777777777777778, "#fb9f3a"],
                        [0.8888888888888888, "#fdca26"],
                        [1.0, "#f0f921"]
                    ],
                    "sequentialminus": [
                        [0.0, "#0d0887"],
                        [0.1111111111111111, "#46039f"],
                        [0.2222222222222222, "#7201a8"],
                        [0.3333333333333333, "#9c179e"],
                        [0.4444444444444444, "#bd3786"],
                        [0.5555555555555556, "#d8576b"],
                        [0.6666666666666666, "#ed7953"],
                        [0.7777777777777778, "#fb9f3a"],
                        [0.8888888888888888, "#fdca26"],
                        [1.0, "#f0f921"]
                    ]
                },
                "colorway": ["#636efa", "#EF553B", "#00cc96", "#ab63fa", "#FFA15A", "#19d3f3", "#FF6692", "#B6E880", "#FF97FF", "#FECB52"],
                "font": {
                    "color": "#2a3f5f"
                },
                "geo": {
                    "bgcolor": "white",
                    "lakecolor": "white",
                    "landcolor": "#E5ECF6",
                    "showlakes": true,
                    "showland": true,
                    "subunitcolor": "white"
                },
                "hoverlabel": {
                    "align": "left"
                },
                "hovermode": "closest",
                "mapbox": {
                    "style": "light"
                },
                "paper_bgcolor": "white",
                "plot_bgcolor": "#E5ECF6",
                "polar": {
                    "angularaxis": {
                        "gridcolor": "white",
                        "linecolor": "white",
                        "ticks": ""
                    },
                    "bgcolor": "#E5ECF6",
                    "radialaxis": {
                        "gridcolor": "white",
                        "linecolor": "white",
                        "ticks": ""
                    }
                },
                "scene": {
                    "xaxis": {
                        "backgroundcolor": "#E5ECF6",
                        "gridcolor": "white",
                        "gridwidth": 2,
                        "linecolor": "white",
                        "showbackground": true,
                        "ticks": "",
                        "zerolinecolor": "white"
                    },
                    "yaxis": {
                        "backgroundcolor": "#E5ECF6",
                        "gridcolor": "white",
                        "gridwidth": 2,
                        "linecolor": "white",
                        "showbackground": true,
                        "ticks": "",
                        "zerolinecolor": "white"
                    },
                    "zaxis": {
                        "backgroundcolor": "#E5ECF6",
                        "gridcolor": "white",
                        "gridwidth": 2,
                        "linecolor": "white",
                        "showbackground": true,
                        "ticks": "",
                        "zerolinecolor": "white"
                    }
                },
                "shapedefaults": {
                    "line": {
                        "color": "#2a3f5f"
                    }
                },
                "ternary": {
                    "aaxis": {
                        "gridcolor": "white",
                        "linecolor": "white",
                        "ticks": ""
                    },
                    "baxis": {
                        "gridcolor": "white",
                        "linecolor": "white",
                        "ticks": ""
                    },
                    "bgcolor": "#E5ECF6",
                    "caxis": {
                        "gridcolor": "white",
                        "linecolor": "white",
                        "ticks": ""
                    }
                },
                "title": {
                    "x": 0.05
                },
                "xaxis": {
                    "automargin": true,
                    "gridcolor": "white",
                    "linecolor": "white",
                    "ticks": "",
                    "title": {
                        "standoff": 15
                    },
                    "zerolinecolor": "white",
                    "zerolinewidth": 2
                },
                "yaxis": {
                    "automargin": true,
                    "gridcolor": "white",
                    "linecolor": "white",
                    "ticks": "",
                    "title": {
                        "standoff": 15
                    },
                    "zerolinecolor": "white",
                    "zerolinewidth": 2
                }
            }
        },
        "title": {
            "text": "Brands with most phone models",
            "x": 0.5
        },
        "xaxis": {
            "anchor": "y",
            "domain": [0.0, 1.0],
            "fixedrange": true,
            "title": {
                "text": "Count"
            }
        },
        "yaxis": {
            "anchor": "x",
            "domain": [0.0, 1.0],
            "fixedrange": true,
            "title": {
                "text": "Brand"
            }
        }
    }, {
        "responsive": true
    })
};


// Bar plot of smartphone brands analyzed

window.PLOTLYENV = window.PLOTLYENV || {};
if (document.getElementById("smartphone_plot_analyzed_brands")) {
    Plotly.newPlot("smartphone_plot_analyzed_brands", [{
        "alignmentgroup": "True",
        "hovertemplate": "variable=Models<br>value=%{x}<br>Brand=%{y}<extra></extra>",
        "legendgroup": "Models",
        "marker": {
            "color": "#636efa",
            "pattern": {
                "shape": ""
            }
        },
        "name": "Models",
        "offsetgroup": "Models",
        "orientation": "h",
        "showlegend": true,
        "textposition": "auto",
        "x": [22, 110, 107, 249, 995],
        "xaxis": "x",
        "y": ["Apple", "Oppo", "Xiaomi", "Huawei", "Samsung"],
        "yaxis": "y",
        "type": "bar"
    }], {
        "barmode": "relative",
        "legend": {
            "title": {
                "text": "variable"
            },
            "tracegroupgap": 0
        },
        "showlegend": false,
        "template": {
            "data": {
                "barpolar": [{
                    "marker": {
                        "line": {
                            "color": "#E5ECF6",
                            "width": 0.5
                        },
                        "pattern": {
                            "fillmode": "overlay",
                            "size": 10,
                            "solidity": 0.2
                        }
                    },
                    "type": "barpolar"
                }],
                "bar": [{
                    "error_x": {
                        "color": "#2a3f5f"
                    },
                    "error_y": {
                        "color": "#2a3f5f"
                    },
                    "marker": {
                        "line": {
                            "color": "#E5ECF6",
                            "width": 0.5
                        },
                        "pattern": {
                            "fillmode": "overlay",
                            "size": 10,
                            "solidity": 0.2
                        }
                    },
                    "type": "bar"
                }],
                "carpet": [{
                    "aaxis": {
                        "endlinecolor": "#2a3f5f",
                        "gridcolor": "white",
                        "linecolor": "white",
                        "minorgridcolor": "white",
                        "startlinecolor": "#2a3f5f"
                    },
                    "baxis": {
                        "endlinecolor": "#2a3f5f",
                        "gridcolor": "white",
                        "linecolor": "white",
                        "minorgridcolor": "white",
                        "startlinecolor": "#2a3f5f"
                    },
                    "type": "carpet"
                }],
                "choropleth": [{
                    "colorbar": {
                        "outlinewidth": 0,
                        "ticks": ""
                    },
                    "type": "choropleth"
                }],
                "contourcarpet": [{
                    "colorbar": {
                        "outlinewidth": 0,
                        "ticks": ""
                    },
                    "type": "contourcarpet"
                }],
                "contour": [{
                    "colorbar": {
                        "outlinewidth": 0,
                        "ticks": ""
                    },
                    "colorscale": [
                        [0.0, "#0d0887"],
                        [0.1111111111111111, "#46039f"],
                        [0.2222222222222222, "#7201a8"],
                        [0.3333333333333333, "#9c179e"],
                        [0.4444444444444444, "#bd3786"],
                        [0.5555555555555556, "#d8576b"],
                        [0.6666666666666666, "#ed7953"],
                        [0.7777777777777778, "#fb9f3a"],
                        [0.8888888888888888, "#fdca26"],
                        [1.0, "#f0f921"]
                    ],
                    "type": "contour"
                }],
                "heatmapgl": [{
                    "colorbar": {
                        "outlinewidth": 0,
                        "ticks": ""
                    },
                    "colorscale": [
                        [0.0, "#0d0887"],
                        [0.1111111111111111, "#46039f"],
                        [0.2222222222222222, "#7201a8"],
                        [0.3333333333333333, "#9c179e"],
                        [0.4444444444444444, "#bd3786"],
                        [0.5555555555555556, "#d8576b"],
                        [0.6666666666666666, "#ed7953"],
                        [0.7777777777777778, "#fb9f3a"],
                        [0.8888888888888888, "#fdca26"],
                        [1.0, "#f0f921"]
                    ],
                    "type": "heatmapgl"
                }],
                "heatmap": [{
                    "colorbar": {
                        "outlinewidth": 0,
                        "ticks": ""
                    },
                    "colorscale": [
                        [0.0, "#0d0887"],
                        [0.1111111111111111, "#46039f"],
                        [0.2222222222222222, "#7201a8"],
                        [0.3333333333333333, "#9c179e"],
                        [0.4444444444444444, "#bd3786"],
                        [0.5555555555555556, "#d8576b"],
                        [0.6666666666666666, "#ed7953"],
                        [0.7777777777777778, "#fb9f3a"],
                        [0.8888888888888888, "#fdca26"],
                        [1.0, "#f0f921"]
                    ],
                    "type": "heatmap"
                }],
                "histogram2dcontour": [{
                    "colorbar": {
                        "outlinewidth": 0,
                        "ticks": ""
                    },
                    "colorscale": [
                        [0.0, "#0d0887"],
                        [0.1111111111111111, "#46039f"],
                        [0.2222222222222222, "#7201a8"],
                        [0.3333333333333333, "#9c179e"],
                        [0.4444444444444444, "#bd3786"],
                        [0.5555555555555556, "#d8576b"],
                        [0.6666666666666666, "#ed7953"],
                        [0.7777777777777778, "#fb9f3a"],
                        [0.8888888888888888, "#fdca26"],
                        [1.0, "#f0f921"]
                    ],
                    "type": "histogram2dcontour"
                }],
                "histogram2d": [{
                    "colorbar": {
                        "outlinewidth": 0,
                        "ticks": ""
                    },
                    "colorscale": [
                        [0.0, "#0d0887"],
                        [0.1111111111111111, "#46039f"],
                        [0.2222222222222222, "#7201a8"],
                        [0.3333333333333333, "#9c179e"],
                        [0.4444444444444444, "#bd3786"],
                        [0.5555555555555556, "#d8576b"],
                        [0.6666666666666666, "#ed7953"],
                        [0.7777777777777778, "#fb9f3a"],
                        [0.8888888888888888, "#fdca26"],
                        [1.0, "#f0f921"]
                    ],
                    "type": "histogram2d"
                }],
                "histogram": [{
                    "marker": {
                        "pattern": {
                            "fillmode": "overlay",
                            "size": 10,
                            "solidity": 0.2
                        }
                    },
                    "type": "histogram"
                }],
                "mesh3d": [{
                    "colorbar": {
                        "outlinewidth": 0,
                        "ticks": ""
                    },
                    "type": "mesh3d"
                }],
                "parcoords": [{
                    "line": {
                        "colorbar": {
                            "outlinewidth": 0,
                            "ticks": ""
                        }
                    },
                    "type": "parcoords"
                }],
                "pie": [{
                    "automargin": true,
                    "type": "pie"
                }],
                "scatter3d": [{
                    "line": {
                        "colorbar": {
                            "outlinewidth": 0,
                            "ticks": ""
                        }
                    },
                    "marker": {
                        "colorbar": {
                            "outlinewidth": 0,
                            "ticks": ""
                        }
                    },
                    "type": "scatter3d"
                }],
                "scattercarpet": [{
                    "marker": {
                        "colorbar": {
                            "outlinewidth": 0,
                            "ticks": ""
                        }
                    },
                    "type": "scattercarpet"
                }],
                "scattergeo": [{
                    "marker": {
                        "colorbar": {
                            "outlinewidth": 0,
                            "ticks": ""
                        }
                    },
                    "type": "scattergeo"
                }],
                "scattergl": [{
                    "marker": {
                        "colorbar": {
                            "outlinewidth": 0,
                            "ticks": ""
                        }
                    },
                    "type": "scattergl"
                }],
                "scattermapbox": [{
                    "marker": {
                        "colorbar": {
                            "outlinewidth": 0,
                            "ticks": ""
                        }
                    },
                    "type": "scattermapbox"
                }],
                "scatterpolargl": [{
                    "marker": {
                        "colorbar": {
                            "outlinewidth": 0,
                            "ticks": ""
                        }
                    },
                    "type": "scatterpolargl"
                }],
                "scatterpolar": [{
                    "marker": {
                        "colorbar": {
                            "outlinewidth": 0,
                            "ticks": ""
                        }
                    },
                    "type": "scatterpolar"
                }],
                "scatter": [{
                    "fillpattern": {
                        "fillmode": "overlay",
                        "size": 10,
                        "solidity": 0.2
                    },
                    "type": "scatter"
                }],
                "scatterternary": [{
                    "marker": {
                        "colorbar": {
                            "outlinewidth": 0,
                            "ticks": ""
                        }
                    },
                    "type": "scatterternary"
                }],
                "surface": [{
                    "colorbar": {
                        "outlinewidth": 0,
                        "ticks": ""
                    },
                    "colorscale": [
                        [0.0, "#0d0887"],
                        [0.1111111111111111, "#46039f"],
                        [0.2222222222222222, "#7201a8"],
                        [0.3333333333333333, "#9c179e"],
                        [0.4444444444444444, "#bd3786"],
                        [0.5555555555555556, "#d8576b"],
                        [0.6666666666666666, "#ed7953"],
                        [0.7777777777777778, "#fb9f3a"],
                        [0.8888888888888888, "#fdca26"],
                        [1.0, "#f0f921"]
                    ],
                    "type": "surface"
                }],
                "table": [{
                    "cells": {
                        "fill": {
                            "color": "#EBF0F8"
                        },
                        "line": {
                            "color": "white"
                        }
                    },
                    "header": {
                        "fill": {
                            "color": "#C8D4E3"
                        },
                        "line": {
                            "color": "white"
                        }
                    },
                    "type": "table"
                }]
            },
            "layout": {
                "annotationdefaults": {
                    "arrowcolor": "#2a3f5f",
                    "arrowhead": 0,
                    "arrowwidth": 1
                },
                "autotypenumbers": "strict",
                "coloraxis": {
                    "colorbar": {
                        "outlinewidth": 0,
                        "ticks": ""
                    }
                },
                "colorscale": {
                    "diverging": [
                        [0, "#8e0152"],
                        [0.1, "#c51b7d"],
                        [0.2, "#de77ae"],
                        [0.3, "#f1b6da"],
                        [0.4, "#fde0ef"],
                        [0.5, "#f7f7f7"],
                        [0.6, "#e6f5d0"],
                        [0.7, "#b8e186"],
                        [0.8, "#7fbc41"],
                        [0.9, "#4d9221"],
                        [1, "#276419"]
                    ],
                    "sequential": [
                        [0.0, "#0d0887"],
                        [0.1111111111111111, "#46039f"],
                        [0.2222222222222222, "#7201a8"],
                        [0.3333333333333333, "#9c179e"],
                        [0.4444444444444444, "#bd3786"],
                        [0.5555555555555556, "#d8576b"],
                        [0.6666666666666666, "#ed7953"],
                        [0.7777777777777778, "#fb9f3a"],
                        [0.8888888888888888, "#fdca26"],
                        [1.0, "#f0f921"]
                    ],
                    "sequentialminus": [
                        [0.0, "#0d0887"],
                        [0.1111111111111111, "#46039f"],
                        [0.2222222222222222, "#7201a8"],
                        [0.3333333333333333, "#9c179e"],
                        [0.4444444444444444, "#bd3786"],
                        [0.5555555555555556, "#d8576b"],
                        [0.6666666666666666, "#ed7953"],
                        [0.7777777777777778, "#fb9f3a"],
                        [0.8888888888888888, "#fdca26"],
                        [1.0, "#f0f921"]
                    ]
                },
                "colorway": ["#636efa", "#EF553B", "#00cc96", "#ab63fa", "#FFA15A", "#19d3f3", "#FF6692", "#B6E880", "#FF97FF", "#FECB52"],
                "font": {
                    "color": "#2a3f5f"
                },
                "geo": {
                    "bgcolor": "white",
                    "lakecolor": "white",
                    "landcolor": "#E5ECF6",
                    "showlakes": true,
                    "showland": true,
                    "subunitcolor": "white"
                },
                "hoverlabel": {
                    "align": "left"
                },
                "hovermode": "closest",
                "mapbox": {
                    "style": "light"
                },
                "paper_bgcolor": "white",
                "plot_bgcolor": "#E5ECF6",
                "polar": {
                    "angularaxis": {
                        "gridcolor": "white",
                        "linecolor": "white",
                        "ticks": ""
                    },
                    "bgcolor": "#E5ECF6",
                    "radialaxis": {
                        "gridcolor": "white",
                        "linecolor": "white",
                        "ticks": ""
                    }
                },
                "scene": {
                    "xaxis": {
                        "backgroundcolor": "#E5ECF6",
                        "gridcolor": "white",
                        "gridwidth": 2,
                        "linecolor": "white",
                        "showbackground": true,
                        "ticks": "",
                        "zerolinecolor": "white"
                    },
                    "yaxis": {
                        "backgroundcolor": "#E5ECF6",
                        "gridcolor": "white",
                        "gridwidth": 2,
                        "linecolor": "white",
                        "showbackground": true,
                        "ticks": "",
                        "zerolinecolor": "white"
                    },
                    "zaxis": {
                        "backgroundcolor": "#E5ECF6",
                        "gridcolor": "white",
                        "gridwidth": 2,
                        "linecolor": "white",
                        "showbackground": true,
                        "ticks": "",
                        "zerolinecolor": "white"
                    }
                },
                "shapedefaults": {
                    "line": {
                        "color": "#2a3f5f"
                    }
                },
                "ternary": {
                    "aaxis": {
                        "gridcolor": "white",
                        "linecolor": "white",
                        "ticks": ""
                    },
                    "baxis": {
                        "gridcolor": "white",
                        "linecolor": "white",
                        "ticks": ""
                    },
                    "bgcolor": "#E5ECF6",
                    "caxis": {
                        "gridcolor": "white",
                        "linecolor": "white",
                        "ticks": ""
                    }
                },
                "title": {
                    "x": 0.05
                },
                "xaxis": {
                    "automargin": true,
                    "gridcolor": "white",
                    "linecolor": "white",
                    "ticks": "",
                    "title": {
                        "standoff": 15
                    },
                    "zerolinecolor": "white",
                    "zerolinewidth": 2
                },
                "yaxis": {
                    "automargin": true,
                    "gridcolor": "white",
                    "linecolor": "white",
                    "ticks": "",
                    "title": {
                        "standoff": 15
                    },
                    "zerolinecolor": "white",
                    "zerolinewidth": 2
                }
            }
        },
        "title": {
            "text": "Models For Selected Brands",
            "x": 0.5
        },
        "xaxis": {
            "anchor": "y",
            "domain": [0.0, 1.0],
            "fixedrange": true,
            "title": {
                "text": "Count"
            }
        },
        "yaxis": {
            "anchor": "x",
            "domain": [0.0, 1.0],
            "fixedrange": true,
            "title": {
                "text": "Brand"
            }
        }
    }, {
        "responsive": true
    })
};


// Number of views per year for one brand

window.PLOTLYENV = window.PLOTLYENV || {};
if (document.getElementById("nbr_videos_comparison_all_years_one_brand")) {
    Plotly.newPlot(
        "nbr_videos_comparison_all_years_one_brand",
        [
            { line: { shape: "spline" }, name: "2008", x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], y: [6.0, 11.0, 5.0, 10.0, 11.0, 11.0, 19.0, 16.0, 14.0, 31.0, 20.0, 30.0], type: "scatter" },
            { line: { shape: "spline" }, name: "2009", x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], y: [27.0, 29.0, 26.0, 39.0, 31.0, 31.0, 23.0, 33.0, 32.0, 49.0, 74.0, 46.0], type: "scatter" },
            { line: { shape: "spline" }, name: "2010", x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], y: [38.0, 62.0, 56.0, 52.0, 45.0, 84.0, 128.0, 84.0, 167.0, 122.0, 198.0, 127.0], type: "scatter" },
            { line: { shape: "spline" }, name: "2011", x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], y: [153.0, 130.0, 140.0, 126.0, 283.0, 187.0, 156.0, 171.0, 289.0, 269.0, 399.0, 410.0], type: "scatter" },
            { line: { shape: "spline" }, name: "2012", x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], y: [404.0, 403.0, 393.0, 305.0, 552.0, 605.0, 578.0, 584.0, 407.0, 575.0, 508.0, 450.0], type: "scatter" },
            { line: { shape: "spline" }, name: "2013", x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], y: [450.0, 396.0, 569.0, 723.0, 960.0, 796.0, 720.0, 548.0, 749.0, 845.0, 469.0, 420.0], type: "scatter" },
            { line: { shape: "spline" }, name: "2014", x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], y: [669.0, 711.0, 533.0, 955.0, 680.0, 620.0, 558.0, 420.0, 553.0, 616.0, 658.0, 572.0], type: "scatter" },
            { line: { shape: "spline" }, name: "2015", x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], y: [562.0, 496.0, 867.0, 956.0, 697.0, 508.0, 493.0, 891.0, 906.0, 663.0, 569.0, 546.0], type: "scatter" },
            { line: { shape: "spline" }, name: "2016", x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], y: [586.0, 708.0, 1137.0, 659.0, 718.0, 709.0, 684.0, 1166.0, 832.0, 762.0, 639.0, 626.0], type: "scatter" },
            { line: { shape: "spline" }, name: "2017", x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], y: [888.0, 839.0, 1146.0, 1409.0, 1360.0, 1128.0, 1032.0, 1316.0, 1349.0, 1109.0, 920.0, 1075.0], type: "scatter" },
            { line: { shape: "spline" }, name: "2018", x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], y: [1241.0, 1359.0, 1774.0, 1251.0, 1478.0, 1330.0, 1401.0, 1798.0, 1605.0, 1432.0, 1537.0, 1422.0], type: "scatter" },
        ],
        {
            autosize: false,
            height: 600,
            template: {
                data: {
                    barpolar: [{ marker: { line: { color: "#E5ECF6", width: 0.5 }, pattern: { fillmode: "overlay", size: 10, solidity: 0.2 } }, type: "barpolar" }],
                    bar: [{ error_x: { color: "#2a3f5f" }, error_y: { color: "#2a3f5f" }, marker: { line: { color: "#E5ECF6", width: 0.5 }, pattern: { fillmode: "overlay", size: 10, solidity: 0.2 } }, type: "bar" }],
                    carpet: [
                        {
                            aaxis: { endlinecolor: "#2a3f5f", gridcolor: "white", linecolor: "white", minorgridcolor: "white", startlinecolor: "#2a3f5f" },
                            baxis: { endlinecolor: "#2a3f5f", gridcolor: "white", linecolor: "white", minorgridcolor: "white", startlinecolor: "#2a3f5f" },
                            type: "carpet",
                        },
                    ],
                    choropleth: [{ colorbar: { outlinewidth: 0, ticks: "" }, type: "choropleth" }],
                    contourcarpet: [{ colorbar: { outlinewidth: 0, ticks: "" }, type: "contourcarpet" }],
                    contour: [
                        {
                            colorbar: { outlinewidth: 0, ticks: "" },
                            colorscale: [
                                [0.0, "#0d0887"],
                                [0.1111111111111111, "#46039f"],
                                [0.2222222222222222, "#7201a8"],
                                [0.3333333333333333, "#9c179e"],
                                [0.4444444444444444, "#bd3786"],
                                [0.5555555555555556, "#d8576b"],
                                [0.6666666666666666, "#ed7953"],
                                [0.7777777777777778, "#fb9f3a"],
                                [0.8888888888888888, "#fdca26"],
                                [1.0, "#f0f921"],
                            ],
                            type: "contour",
                        },
                    ],
                    heatmapgl: [
                        {
                            colorbar: { outlinewidth: 0, ticks: "" },
                            colorscale: [
                                [0.0, "#0d0887"],
                                [0.1111111111111111, "#46039f"],
                                [0.2222222222222222, "#7201a8"],
                                [0.3333333333333333, "#9c179e"],
                                [0.4444444444444444, "#bd3786"],
                                [0.5555555555555556, "#d8576b"],
                                [0.6666666666666666, "#ed7953"],
                                [0.7777777777777778, "#fb9f3a"],
                                [0.8888888888888888, "#fdca26"],
                                [1.0, "#f0f921"],
                            ],
                            type: "heatmapgl",
                        },
                    ],
                    heatmap: [
                        {
                            colorbar: { outlinewidth: 0, ticks: "" },
                            colorscale: [
                                [0.0, "#0d0887"],
                                [0.1111111111111111, "#46039f"],
                                [0.2222222222222222, "#7201a8"],
                                [0.3333333333333333, "#9c179e"],
                                [0.4444444444444444, "#bd3786"],
                                [0.5555555555555556, "#d8576b"],
                                [0.6666666666666666, "#ed7953"],
                                [0.7777777777777778, "#fb9f3a"],
                                [0.8888888888888888, "#fdca26"],
                                [1.0, "#f0f921"],
                            ],
                            type: "heatmap",
                        },
                    ],
                    histogram2dcontour: [
                        {
                            colorbar: { outlinewidth: 0, ticks: "" },
                            colorscale: [
                                [0.0, "#0d0887"],
                                [0.1111111111111111, "#46039f"],
                                [0.2222222222222222, "#7201a8"],
                                [0.3333333333333333, "#9c179e"],
                                [0.4444444444444444, "#bd3786"],
                                [0.5555555555555556, "#d8576b"],
                                [0.6666666666666666, "#ed7953"],
                                [0.7777777777777778, "#fb9f3a"],
                                [0.8888888888888888, "#fdca26"],
                                [1.0, "#f0f921"],
                            ],
                            type: "histogram2dcontour",
                        },
                    ],
                    histogram2d: [
                        {
                            colorbar: { outlinewidth: 0, ticks: "" },
                            colorscale: [
                                [0.0, "#0d0887"],
                                [0.1111111111111111, "#46039f"],
                                [0.2222222222222222, "#7201a8"],
                                [0.3333333333333333, "#9c179e"],
                                [0.4444444444444444, "#bd3786"],
                                [0.5555555555555556, "#d8576b"],
                                [0.6666666666666666, "#ed7953"],
                                [0.7777777777777778, "#fb9f3a"],
                                [0.8888888888888888, "#fdca26"],
                                [1.0, "#f0f921"],
                            ],
                            type: "histogram2d",
                        },
                    ],
                    histogram: [{ marker: { pattern: { fillmode: "overlay", size: 10, solidity: 0.2 } }, type: "histogram" }],
                    mesh3d: [{ colorbar: { outlinewidth: 0, ticks: "" }, type: "mesh3d" }],
                    parcoords: [{ line: { colorbar: { outlinewidth: 0, ticks: "" } }, type: "parcoords" }],
                    pie: [{ automargin: true, type: "pie" }],
                    scatter3d: [{ line: { colorbar: { outlinewidth: 0, ticks: "" } }, marker: { colorbar: { outlinewidth: 0, ticks: "" } }, type: "scatter3d" }],
                    scattercarpet: [{ marker: { colorbar: { outlinewidth: 0, ticks: "" } }, type: "scattercarpet" }],
                    scattergeo: [{ marker: { colorbar: { outlinewidth: 0, ticks: "" } }, type: "scattergeo" }],
                    scattergl: [{ marker: { colorbar: { outlinewidth: 0, ticks: "" } }, type: "scattergl" }],
                    scattermapbox: [{ marker: { colorbar: { outlinewidth: 0, ticks: "" } }, type: "scattermapbox" }],
                    scatterpolargl: [{ marker: { colorbar: { outlinewidth: 0, ticks: "" } }, type: "scatterpolargl" }],
                    scatterpolar: [{ marker: { colorbar: { outlinewidth: 0, ticks: "" } }, type: "scatterpolar" }],
                    scatter: [{ fillpattern: { fillmode: "overlay", size: 10, solidity: 0.2 }, type: "scatter" }],
                    scatterternary: [{ marker: { colorbar: { outlinewidth: 0, ticks: "" } }, type: "scatterternary" }],
                    surface: [
                        {
                            colorbar: { outlinewidth: 0, ticks: "" },
                            colorscale: [
                                [0.0, "#0d0887"],
                                [0.1111111111111111, "#46039f"],
                                [0.2222222222222222, "#7201a8"],
                                [0.3333333333333333, "#9c179e"],
                                [0.4444444444444444, "#bd3786"],
                                [0.5555555555555556, "#d8576b"],
                                [0.6666666666666666, "#ed7953"],
                                [0.7777777777777778, "#fb9f3a"],
                                [0.8888888888888888, "#fdca26"],
                                [1.0, "#f0f921"],
                            ],
                            type: "surface",
                        },
                    ],
                    table: [{ cells: { fill: { color: "#EBF0F8" }, line: { color: "white" } }, header: { fill: { color: "#C8D4E3" }, line: { color: "white" } }, type: "table" }],
                },
                layout: {
                    annotationdefaults: { arrowcolor: "#2a3f5f", arrowhead: 0, arrowwidth: 1 },
                    autotypenumbers: "strict",
                    coloraxis: { colorbar: { outlinewidth: 0, ticks: "" } },
                    colorscale: {
                        diverging: [
                            [0, "#8e0152"],
                            [0.1, "#c51b7d"],
                            [0.2, "#de77ae"],
                            [0.3, "#f1b6da"],
                            [0.4, "#fde0ef"],
                            [0.5, "#f7f7f7"],
                            [0.6, "#e6f5d0"],
                            [0.7, "#b8e186"],
                            [0.8, "#7fbc41"],
                            [0.9, "#4d9221"],
                            [1, "#276419"],
                        ],
                        sequential: [
                            [0.0, "#0d0887"],
                            [0.1111111111111111, "#46039f"],
                            [0.2222222222222222, "#7201a8"],
                            [0.3333333333333333, "#9c179e"],
                            [0.4444444444444444, "#bd3786"],
                            [0.5555555555555556, "#d8576b"],
                            [0.6666666666666666, "#ed7953"],
                            [0.7777777777777778, "#fb9f3a"],
                            [0.8888888888888888, "#fdca26"],
                            [1.0, "#f0f921"],
                        ],
                        sequentialminus: [
                            [0.0, "#0d0887"],
                            [0.1111111111111111, "#46039f"],
                            [0.2222222222222222, "#7201a8"],
                            [0.3333333333333333, "#9c179e"],
                            [0.4444444444444444, "#bd3786"],
                            [0.5555555555555556, "#d8576b"],
                            [0.6666666666666666, "#ed7953"],
                            [0.7777777777777778, "#fb9f3a"],
                            [0.8888888888888888, "#fdca26"],
                            [1.0, "#f0f921"],
                        ],
                    },
                    colorway: ["#636efa", "#EF553B", "#00cc96", "#ab63fa", "#FFA15A", "#19d3f3", "#FF6692", "#B6E880", "#FF97FF", "#FECB52"],
                    font: { color: "#2a3f5f" },
                    geo: { bgcolor: "white", lakecolor: "white", landcolor: "#E5ECF6", showlakes: true, showland: true, subunitcolor: "white" },
                    hoverlabel: { align: "left" },
                    hovermode: "closest",
                    mapbox: { style: "light" },
                    paper_bgcolor: "white",
                    plot_bgcolor: "#E5ECF6",
                    polar: { angularaxis: { gridcolor: "white", linecolor: "white", ticks: "" }, bgcolor: "#E5ECF6", radialaxis: { gridcolor: "white", linecolor: "white", ticks: "" } },
                    scene: {
                        xaxis: { backgroundcolor: "#E5ECF6", gridcolor: "white", gridwidth: 2, linecolor: "white", showbackground: true, ticks: "", zerolinecolor: "white" },
                        yaxis: { backgroundcolor: "#E5ECF6", gridcolor: "white", gridwidth: 2, linecolor: "white", showbackground: true, ticks: "", zerolinecolor: "white" },
                        zaxis: { backgroundcolor: "#E5ECF6", gridcolor: "white", gridwidth: 2, linecolor: "white", showbackground: true, ticks: "", zerolinecolor: "white" },
                    },
                    shapedefaults: { line: { color: "#2a3f5f" } },
                    ternary: {
                        aaxis: { gridcolor: "white", linecolor: "white", ticks: "" },
                        baxis: { gridcolor: "white", linecolor: "white", ticks: "" },
                        bgcolor: "#E5ECF6",
                        caxis: { gridcolor: "white", linecolor: "white", ticks: "" },
                    },
                    title: { x: 0.05 },
                    xaxis: { automargin: true, gridcolor: "white", linecolor: "white", ticks: "", title: { standoff: 15 }, zerolinecolor: "white", zerolinewidth: 2 },
                    yaxis: { automargin: true, gridcolor: "white", linecolor: "white", ticks: "", title: { standoff: 15 }, zerolinecolor: "white", zerolinewidth: 2 },
                },
            },
            updatemenus: [
                {
                    buttons: [
                        {
                            args: [
                                {
                                    y: [
                                        [null, null, null, null, null, null, null, null, 1.0, 0.0, 0.0, 0.0],
                                        [0.0, 2.0, 0.0, 0.0, 4.0, 1.0, 4.0, 5.0, 2.0, 5.0, 16.0, 9.0],
                                        [6.0, 11.0, 5.0, 10.0, 11.0, 11.0, 19.0, 16.0, 14.0, 31.0, 20.0, 30.0],
                                        [27.0, 29.0, 26.0, 39.0, 31.0, 31.0, 23.0, 33.0, 32.0, 49.0, 74.0, 46.0],
                                        [38.0, 62.0, 56.0, 52.0, 45.0, 84.0, 128.0, 84.0, 167.0, 122.0, 198.0, 127.0],
                                        [153.0, 130.0, 140.0, 126.0, 283.0, 187.0, 156.0, 171.0, 289.0, 269.0, 399.0, 410.0],
                                        [404.0, 403.0, 393.0, 305.0, 552.0, 605.0, 578.0, 584.0, 407.0, 575.0, 508.0, 450.0],
                                        [450.0, 396.0, 569.0, 723.0, 960.0, 796.0, 720.0, 548.0, 749.0, 845.0, 469.0, 420.0],
                                        [669.0, 711.0, 533.0, 955.0, 680.0, 620.0, 558.0, 420.0, 553.0, 616.0, 658.0, 572.0],
                                        [562.0, 496.0, 867.0, 956.0, 697.0, 508.0, 493.0, 891.0, 906.0, 663.0, 569.0, 546.0],
                                        [586.0, 708.0, 1137.0, 659.0, 718.0, 709.0, 684.0, 1166.0, 832.0, 762.0, 639.0, 626.0],
                                        [888.0, 839.0, 1146.0, 1409.0, 1360.0, 1128.0, 1032.0, 1316.0, 1349.0, 1109.0, 920.0, 1075.0],
                                        [1241.0, 1359.0, 1774.0, 1251.0, 1478.0, 1330.0, 1401.0, 1798.0, 1605.0, 1432.0, 1537.0, 1422.0],
                                        [1611.0, 2153.0, 2899.0, 2042.0, 1509.0, 1595.0, 1654.0, 2121.0, 2114.0, 192.0, null, null],
                                    ],
                                },
                            ],
                            label: "Samsung",
                            method: "update",
                        },
                        {
                            args: [
                                {
                                    y: [
                                        [1.0, 0.0, 0.0, 0.0, 0.0, 3.0, 1.0, 1.0, 0.0, 0.0, 0.0, 1.0],
                                        [1.0, 1.0, 1.0, 2.0, 0.0, 5.0, 16.0, 2.0, 3.0, 12.0, 4.0, 8.0],
                                        [5.0, 2.0, 3.0, 5.0, 2.0, 27.0, 7.0, 5.0, 10.0, 7.0, 7.0, 6.0],
                                        [11.0, 5.0, 13.0, 50.0, 21.0, 283.0, 139.0, 79.0, 128.0, 114.0, 70.0, 74.0],
                                        [118.0, 141.0, 142.0, 115.0, 103.0, 98.0, 144.0, 109.0, 172.0, 545.0, 251.0, 245.0],
                                        [296.0, 187.0, 234.0, 243.0, 245.0, 181.0, 194.0, 199.0, 976.0, 520.0, 387.0, 310.0],
                                        [385.0, 367.0, 372.0, 364.0, 275.0, 485.0, 341.0, 443.0, 1035.0, 501.0, 382.0, 354.0],
                                        [527.0, 336.0, 472.0, 296.0, 324.0, 392.0, 318.0, 280.0, 1289.0, 788.0, 419.0, 377.0],
                                        [382.0, 323.0, 374.0, 318.0, 290.0, 390.0, 408.0, 302.0, 934.0, 674.0, 409.0, 474.0],
                                        [438.0, 382.0, 661.0, 576.0, 437.0, 526.0, 482.0, 542.0, 1709.0, 1144.0, 743.0, 679.0],
                                        [678.0, 636.0, 723.0, 601.0, 577.0, 760.0, 639.0, 776.0, 1638.0, 1207.0, 1703.0, 977.0],
                                        [983.0, 804.0, 795.0, 702.0, 696.0, 793.0, 760.0, 716.0, 1587.0, 1342.0, 1026.0, 818.0],
                                        [810.0, 661.0, 755.0, 571.0, 605.0, 568.0, 537.0, 594.0, 1150.0, 76.0, null, null],
                                    ],
                                },
                            ],
                            label: "Apple",
                            method: "update",
                        },
                        {
                            args: [
                                {
                                    y: [
                                        [null, null, null, 5.0, 1.0, 5.0, 5.0, 2.0, 3.0, 1.0, 3.0, 3.0],
                                        [1.0, 4.0, 3.0, 7.0, 18.0, 12.0, 6.0, 11.0, 6.0, 13.0, 7.0, 7.0],
                                        [10.0, 33.0, 17.0, 36.0, 42.0, 34.0, 25.0, 19.0, 19.0, 21.0, 16.0, 11.0],
                                        [23.0, 25.0, 41.0, 42.0, 30.0, 48.0, 28.0, 28.0, 40.0, 68.0, 39.0, 52.0],
                                        [58.0, 87.0, 163.0, 173.0, 189.0, 168.0, 72.0, 89.0, 72.0, 91.0, 41.0, 36.0],
                                        [70.0, 77.0, 69.0, 117.0, 128.0, 127.0, 84.0, 110.0, 83.0, 90.0, 95.0, 82.0],
                                        [200.0, 124.0, 126.0, 136.0, 133.0, 125.0, 118.0, 107.0, 129.0, 76.0, 129.0, 88.0],
                                        [115.0, 148.0, 167.0, 107.0, 196.0, 125.0, 108.0, 97.0, 187.0, 140.0, 138.0, 153.0],
                                        [185.0, 115.0, 211.0, 183.0, 234.0, 224.0, 221.0, 214.0, 296.0, 335.0, 376.0, 308.0],
                                        [383.0, 300.0, 306.0, 288.0, 312.0, 418.0, 304.0, 396.0, 380.0, 332.0, 428.0, 360.0],
                                        [469.0, 429.0, 567.0, 468.0, 552.0, 604.0, 587.0, 611.0, 467.0, 610.0, 580.0, 596.0],
                                        [642.0, 623.0, 794.0, 841.0, 845.0, 615.0, 736.0, 737.0, 710.0, 1065.0, 959.0, 1215.0],
                                        [1634.0, 1414.0, 1415.0, 1817.0, 1753.0, 1228.0, 1323.0, 1157.0, 1338.0, 96.0, null, null],
                                    ],
                                },
                            ],
                            label: "Huawei",
                            method: "update",
                        },
                        {
                            args: [
                                {
                                    y: [
                                        [null, null, null, null, null, null, null, null, null, null, 1.0, 0.0],
                                        [22.0, 2.0, 3.0, 4.0, 21.0, 16.0, 4.0, 6.0, 11.0, 12.0, 12.0, 10.0],
                                        [23.0, 11.0, 5.0, 17.0, 7.0, 19.0, 13.0, 12.0, 13.0, 19.0, 17.0, 23.0],
                                        [30.0, 29.0, 31.0, 41.0, 26.0, 26.0, 45.0, 37.0, 50.0, 50.0, 44.0, 62.0],
                                        [34.0, 39.0, 58.0, 69.0, 80.0, 51.0, 69.0, 64.0, 73.0, 94.0, 83.0, 98.0],
                                        [89.0, 106.0, 110.0, 95.0, 119.0, 164.0, 135.0, 113.0, 126.0, 128.0, 131.0, 81.0],
                                        [97.0, 185.0, 115.0, 107.0, 120.0, 154.0, 125.0, 128.0, 128.0, 181.0, 148.0, 156.0],
                                        [180.0, 162.0, 168.0, 134.0, 314.0, 226.0, 165.0, 193.0, 208.0, 166.0, 204.0, 175.0],
                                        [224.0, 200.0, 204.0, 238.0, 244.0, 287.0, 313.0, 401.0, 404.0, 291.0, 230.0, 351.0],
                                        [419.0, 372.0, 338.0, 362.0, 361.0, 346.0, 396.0, 354.0, 341.0, 415.0, 378.0, 391.0],
                                        [420.0, 467.0, 617.0, 516.0, 543.0, 607.0, 528.0, 713.0, 682.0, 796.0, 758.0, 788.0],
                                        [924.0, 925.0, 1063.0, 906.0, 1173.0, 1116.0, 1298.0, 1241.0, 1511.0, 1468.0, 1606.0, 1633.0],
                                        [1637.0, 1932.0, 2012.0, 1838.0, 1899.0, 1985.0, 2139.0, 2248.0, 2444.0, 2771.0, 2058.0, 2039.0],
                                        [2164.0, 1623.0, 2515.0, 2322.0, 2152.0, 1801.0, 2189.0, 1992.0, 2014.0, 121.0, null, null],
                                    ],
                                },
                            ],
                            label: "Xiaomi",
                            method: "update",
                        },
                        {
                            args: [
                                {
                                    y: [
                                        [null, null, null, null, null, null, null, null, null, null, null, 1.0],
                                        [0.0, 0.0, 2.0, 0.0, 0.0, 2.0, 2.0, 5.0, 1.0, 2.0, 0.0, 4.0],
                                        [1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 3.0, 1.0, 1.0, 1.0, 0.0],
                                        [3.0, 1.0, 5.0, 2.0, 4.0, 1.0, 1.0, 5.0, 0.0, 7.0, 5.0, 2.0],
                                        [1.0, 2.0, 2.0, 0.0, 1.0, 6.0, 5.0, 5.0, 3.0, 2.0, 4.0, 3.0],
                                        [7.0, 2.0, 6.0, 4.0, 5.0, 2.0, 6.0, 5.0, 7.0, 14.0, 6.0, 8.0],
                                        [10.0, 20.0, 12.0, 15.0, 27.0, 21.0, 13.0, 17.0, 13.0, 8.0, 21.0, 27.0],
                                        [38.0, 25.0, 31.0, 27.0, 35.0, 36.0, 47.0, 29.0, 26.0, 39.0, 18.0, 46.0],
                                        [51.0, 23.0, 36.0, 26.0, 46.0, 37.0, 21.0, 35.0, 30.0, 34.0, 22.0, 22.0],
                                        [36.0, 33.0, 21.0, 52.0, 42.0, 23.0, 46.0, 77.0, 38.0, 36.0, 71.0, 39.0],
                                        [48.0, 98.0, 105.0, 77.0, 107.0, 97.0, 58.0, 69.0, 82.0, 104.0, 165.0, 112.0],
                                        [119.0, 119.0, 136.0, 203.0, 209.0, 171.0, 155.0, 353.0, 307.0, 214.0, 350.0, 246.0],
                                        [154.0, 277.0, 297.0, 240.0, 284.0, 212.0, 220.0, 133.0, 208.0, 25.0, null, null],
                                    ],
                                },
                            ],
                            label: "Oppo",
                            method: "update",
                        },
                    ],
                    direction: "right",
                    showactive: true,
                    type: "buttons",
                    x: 0.7,
                    y: 1.2,
                },
            ],
            width: 1000,
            xaxis: { title: { text: "month" } },
            yaxis: { title: { text: "number of Videos" } },
        },
        { responsive: true }
    );
}


// views comparison one year all brands



window.PLOTLYENV = window.PLOTLYENV || {};
if (document.getElementById("nbr_videos_comparison_all_brands_one_year")) {
    Plotly.newPlot(
        "nbr_videos_comparison_all_brands_one_year",
        [
            {
                hovertemplate: "<b>%{hovertext}</b><br><br>brand=Samsung<br>Year=2008<br>Month=%{x}<br>value=%{y}<extra></extra>",
                hovertext: ["Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung"],
                ids: ["Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung"],
                legendgroup: "Samsung",
                line: { color: "#636efa", dash: "solid", shape: "spline" },
                marker: { symbol: "circle" },
                mode: "lines",
                name: "Samsung",
                orientation: "v",
                showlegend: true,
                x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                xaxis: "x",
                y: [
                    0.1935483870967742,
                    0.3548387096774194,
                    0.16129032258064516,
                    0.3225806451612903,
                    0.3548387096774194,
                    0.3548387096774194,
                    0.6129032258064516,
                    0.5161290322580645,
                    0.45161290322580644,
                    1.0,
                    0.6451612903225806,
                    0.967741935483871,
                ],
                yaxis: "y",
                type: "scatter",
            },
            {
                hovertemplate: "<b>%{hovertext}</b><br><br>brand=Apple<br>Year=2008<br>Month=%{x}<br>value=%{y}<extra></extra>",
                hovertext: ["Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple"],
                ids: ["Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple"],
                legendgroup: "Apple",
                line: { color: "#EF553B", dash: "solid", shape: "spline" },
                marker: { symbol: "circle" },
                mode: "lines",
                name: "Apple",
                orientation: "v",
                showlegend: true,
                x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                xaxis: "x",
                y: [
                    0.03225806451612903,
                    0.03225806451612903,
                    0.03225806451612903,
                    0.06451612903225806,
                    0.0,
                    0.16129032258064516,
                    0.5161290322580645,
                    0.06451612903225806,
                    0.0967741935483871,
                    0.3870967741935484,
                    0.12903225806451613,
                    0.25806451612903225,
                ],
                yaxis: "y",
                type: "scatter",
            },
            {
                hovertemplate: "<b>%{hovertext}</b><br><br>brand=Huawei<br>Year=2008<br>Month=%{x}<br>value=%{y}<extra></extra>",
                hovertext: ["Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei"],
                ids: ["Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei"],
                legendgroup: "Huawei",
                line: { color: "#00cc96", dash: "solid", shape: "spline" },
                marker: { symbol: "circle" },
                mode: "lines",
                name: "Huawei",
                orientation: "v",
                showlegend: true,
                x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                xaxis: "x",
                y: [
                    0.03225806451612903,
                    0.12903225806451613,
                    0.0967741935483871,
                    0.22580645161290322,
                    0.5806451612903226,
                    0.3870967741935484,
                    0.1935483870967742,
                    0.3548387096774194,
                    0.1935483870967742,
                    0.41935483870967744,
                    0.22580645161290322,
                    0.22580645161290322,
                ],
                yaxis: "y",
                type: "scatter",
            },
            {
                hovertemplate: "<b>%{hovertext}</b><br><br>brand=Xiaomi<br>Year=2008<br>Month=%{x}<br>value=%{y}<extra></extra>",
                hovertext: ["Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi"],
                ids: ["Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi"],
                legendgroup: "Xiaomi",
                line: { color: "#ab63fa", dash: "solid", shape: "spline" },
                marker: { symbol: "circle" },
                mode: "lines",
                name: "Xiaomi",
                orientation: "v",
                showlegend: true,
                x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                xaxis: "x",
                y: [
                    0.7419354838709677,
                    0.3548387096774194,
                    0.16129032258064516,
                    0.5483870967741935,
                    0.22580645161290322,
                    0.6129032258064516,
                    0.41935483870967744,
                    0.3870967741935484,
                    0.41935483870967744,
                    0.6129032258064516,
                    0.5483870967741935,
                    0.7419354838709677,
                ],
                yaxis: "y",
                type: "scatter",
            },
            {
                hovertemplate: "<b>%{hovertext}</b><br><br>brand=Oppo<br>Year=2008<br>Month=%{x}<br>value=%{y}<extra></extra>",
                hovertext: ["Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo"],
                ids: ["Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo"],
                legendgroup: "Oppo",
                line: { color: "#FFA15A", dash: "solid", shape: "spline" },
                marker: { symbol: "circle" },
                mode: "lines",
                name: "Oppo",
                orientation: "v",
                showlegend: true,
                x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                xaxis: "x",
                y: [0.0, 0.0, 0.06451612903225806, 0.0, 0.0, 0.06451612903225806, 0.06451612903225806, 0.16129032258064516, 0.03225806451612903, 0.06451612903225806, 0.0, 0.12903225806451613],
                yaxis: "y",
                type: "scatter",
            },
        ],
        {
            height: 700,
            legend: { title: { text: "brand" }, tracegroupgap: 0 },
            sliders: [
                {
                    active: 0,
                    currentvalue: { prefix: "Year=" },
                    len: 0.9,
                    pad: { b: 10, t: 60 },
                    steps: [
                        { args: [["2008"], { frame: { duration: 0, redraw: false }, mode: "immediate", fromcurrent: true, transition: { duration: 0, easing: "linear" } }], label: "2008", method: "animate" },
                        { args: [["2009"], { frame: { duration: 0, redraw: false }, mode: "immediate", fromcurrent: true, transition: { duration: 0, easing: "linear" } }], label: "2009", method: "animate" },
                        { args: [["2010"], { frame: { duration: 0, redraw: false }, mode: "immediate", fromcurrent: true, transition: { duration: 0, easing: "linear" } }], label: "2010", method: "animate" },
                        { args: [["2011"], { frame: { duration: 0, redraw: false }, mode: "immediate", fromcurrent: true, transition: { duration: 0, easing: "linear" } }], label: "2011", method: "animate" },
                        { args: [["2012"], { frame: { duration: 0, redraw: false }, mode: "immediate", fromcurrent: true, transition: { duration: 0, easing: "linear" } }], label: "2012", method: "animate" },
                        { args: [["2013"], { frame: { duration: 0, redraw: false }, mode: "immediate", fromcurrent: true, transition: { duration: 0, easing: "linear" } }], label: "2013", method: "animate" },
                        { args: [["2014"], { frame: { duration: 0, redraw: false }, mode: "immediate", fromcurrent: true, transition: { duration: 0, easing: "linear" } }], label: "2014", method: "animate" },
                        { args: [["2015"], { frame: { duration: 0, redraw: false }, mode: "immediate", fromcurrent: true, transition: { duration: 0, easing: "linear" } }], label: "2015", method: "animate" },
                        { args: [["2016"], { frame: { duration: 0, redraw: false }, mode: "immediate", fromcurrent: true, transition: { duration: 0, easing: "linear" } }], label: "2016", method: "animate" },
                        { args: [["2017"], { frame: { duration: 0, redraw: false }, mode: "immediate", fromcurrent: true, transition: { duration: 0, easing: "linear" } }], label: "2017", method: "animate" },
                        { args: [["2018"], { frame: { duration: 0, redraw: false }, mode: "immediate", fromcurrent: true, transition: { duration: 0, easing: "linear" } }], label: "2018", method: "animate" },
                    ],
                    x: 0.1,
                    xanchor: "left",
                    y: 0,
                    yanchor: "top",
                },
            ],
            template: {
                data: {
                    barpolar: [{ marker: { line: { color: "#E5ECF6", width: 0.5 }, pattern: { fillmode: "overlay", size: 10, solidity: 0.2 } }, type: "barpolar" }],
                    bar: [{ error_x: { color: "#2a3f5f" }, error_y: { color: "#2a3f5f" }, marker: { line: { color: "#E5ECF6", width: 0.5 }, pattern: { fillmode: "overlay", size: 10, solidity: 0.2 } }, type: "bar" }],
                    carpet: [
                        {
                            aaxis: { endlinecolor: "#2a3f5f", gridcolor: "white", linecolor: "white", minorgridcolor: "white", startlinecolor: "#2a3f5f" },
                            baxis: { endlinecolor: "#2a3f5f", gridcolor: "white", linecolor: "white", minorgridcolor: "white", startlinecolor: "#2a3f5f" },
                            type: "carpet",
                        },
                    ],
                    choropleth: [{ colorbar: { outlinewidth: 0, ticks: "" }, type: "choropleth" }],
                    contourcarpet: [{ colorbar: { outlinewidth: 0, ticks: "" }, type: "contourcarpet" }],
                    contour: [
                        {
                            colorbar: { outlinewidth: 0, ticks: "" },
                            colorscale: [
                                [0.0, "#0d0887"],
                                [0.1111111111111111, "#46039f"],
                                [0.2222222222222222, "#7201a8"],
                                [0.3333333333333333, "#9c179e"],
                                [0.4444444444444444, "#bd3786"],
                                [0.5555555555555556, "#d8576b"],
                                [0.6666666666666666, "#ed7953"],
                                [0.7777777777777778, "#fb9f3a"],
                                [0.8888888888888888, "#fdca26"],
                                [1.0, "#f0f921"],
                            ],
                            type: "contour",
                        },
                    ],
                    heatmapgl: [
                        {
                            colorbar: { outlinewidth: 0, ticks: "" },
                            colorscale: [
                                [0.0, "#0d0887"],
                                [0.1111111111111111, "#46039f"],
                                [0.2222222222222222, "#7201a8"],
                                [0.3333333333333333, "#9c179e"],
                                [0.4444444444444444, "#bd3786"],
                                [0.5555555555555556, "#d8576b"],
                                [0.6666666666666666, "#ed7953"],
                                [0.7777777777777778, "#fb9f3a"],
                                [0.8888888888888888, "#fdca26"],
                                [1.0, "#f0f921"],
                            ],
                            type: "heatmapgl",
                        },
                    ],
                    heatmap: [
                        {
                            colorbar: { outlinewidth: 0, ticks: "" },
                            colorscale: [
                                [0.0, "#0d0887"],
                                [0.1111111111111111, "#46039f"],
                                [0.2222222222222222, "#7201a8"],
                                [0.3333333333333333, "#9c179e"],
                                [0.4444444444444444, "#bd3786"],
                                [0.5555555555555556, "#d8576b"],
                                [0.6666666666666666, "#ed7953"],
                                [0.7777777777777778, "#fb9f3a"],
                                [0.8888888888888888, "#fdca26"],
                                [1.0, "#f0f921"],
                            ],
                            type: "heatmap",
                        },
                    ],
                    histogram2dcontour: [
                        {
                            colorbar: { outlinewidth: 0, ticks: "" },
                            colorscale: [
                                [0.0, "#0d0887"],
                                [0.1111111111111111, "#46039f"],
                                [0.2222222222222222, "#7201a8"],
                                [0.3333333333333333, "#9c179e"],
                                [0.4444444444444444, "#bd3786"],
                                [0.5555555555555556, "#d8576b"],
                                [0.6666666666666666, "#ed7953"],
                                [0.7777777777777778, "#fb9f3a"],
                                [0.8888888888888888, "#fdca26"],
                                [1.0, "#f0f921"],
                            ],
                            type: "histogram2dcontour",
                        },
                    ],
                    histogram2d: [
                        {
                            colorbar: { outlinewidth: 0, ticks: "" },
                            colorscale: [
                                [0.0, "#0d0887"],
                                [0.1111111111111111, "#46039f"],
                                [0.2222222222222222, "#7201a8"],
                                [0.3333333333333333, "#9c179e"],
                                [0.4444444444444444, "#bd3786"],
                                [0.5555555555555556, "#d8576b"],
                                [0.6666666666666666, "#ed7953"],
                                [0.7777777777777778, "#fb9f3a"],
                                [0.8888888888888888, "#fdca26"],
                                [1.0, "#f0f921"],
                            ],
                            type: "histogram2d",
                        },
                    ],
                    histogram: [{ marker: { pattern: { fillmode: "overlay", size: 10, solidity: 0.2 } }, type: "histogram" }],
                    mesh3d: [{ colorbar: { outlinewidth: 0, ticks: "" }, type: "mesh3d" }],
                    parcoords: [{ line: { colorbar: { outlinewidth: 0, ticks: "" } }, type: "parcoords" }],
                    pie: [{ automargin: true, type: "pie" }],
                    scatter3d: [{ line: { colorbar: { outlinewidth: 0, ticks: "" } }, marker: { colorbar: { outlinewidth: 0, ticks: "" } }, type: "scatter3d" }],
                    scattercarpet: [{ marker: { colorbar: { outlinewidth: 0, ticks: "" } }, type: "scattercarpet" }],
                    scattergeo: [{ marker: { colorbar: { outlinewidth: 0, ticks: "" } }, type: "scattergeo" }],
                    scattergl: [{ marker: { colorbar: { outlinewidth: 0, ticks: "" } }, type: "scattergl" }],
                    scattermapbox: [{ marker: { colorbar: { outlinewidth: 0, ticks: "" } }, type: "scattermapbox" }],
                    scatterpolargl: [{ marker: { colorbar: { outlinewidth: 0, ticks: "" } }, type: "scatterpolargl" }],
                    scatterpolar: [{ marker: { colorbar: { outlinewidth: 0, ticks: "" } }, type: "scatterpolar" }],
                    scatter: [{ fillpattern: { fillmode: "overlay", size: 10, solidity: 0.2 }, type: "scatter" }],
                    scatterternary: [{ marker: { colorbar: { outlinewidth: 0, ticks: "" } }, type: "scatterternary" }],
                    surface: [
                        {
                            colorbar: { outlinewidth: 0, ticks: "" },
                            colorscale: [
                                [0.0, "#0d0887"],
                                [0.1111111111111111, "#46039f"],
                                [0.2222222222222222, "#7201a8"],
                                [0.3333333333333333, "#9c179e"],
                                [0.4444444444444444, "#bd3786"],
                                [0.5555555555555556, "#d8576b"],
                                [0.6666666666666666, "#ed7953"],
                                [0.7777777777777778, "#fb9f3a"],
                                [0.8888888888888888, "#fdca26"],
                                [1.0, "#f0f921"],
                            ],
                            type: "surface",
                        },
                    ],
                    table: [{ cells: { fill: { color: "#EBF0F8" }, line: { color: "white" } }, header: { fill: { color: "#C8D4E3" }, line: { color: "white" } }, type: "table" }],
                },
                layout: {
                    annotationdefaults: { arrowcolor: "#2a3f5f", arrowhead: 0, arrowwidth: 1 },
                    autotypenumbers: "strict",
                    coloraxis: { colorbar: { outlinewidth: 0, ticks: "" } },
                    colorscale: {
                        diverging: [
                            [0, "#8e0152"],
                            [0.1, "#c51b7d"],
                            [0.2, "#de77ae"],
                            [0.3, "#f1b6da"],
                            [0.4, "#fde0ef"],
                            [0.5, "#f7f7f7"],
                            [0.6, "#e6f5d0"],
                            [0.7, "#b8e186"],
                            [0.8, "#7fbc41"],
                            [0.9, "#4d9221"],
                            [1, "#276419"],
                        ],
                        sequential: [
                            [0.0, "#0d0887"],
                            [0.1111111111111111, "#46039f"],
                            [0.2222222222222222, "#7201a8"],
                            [0.3333333333333333, "#9c179e"],
                            [0.4444444444444444, "#bd3786"],
                            [0.5555555555555556, "#d8576b"],
                            [0.6666666666666666, "#ed7953"],
                            [0.7777777777777778, "#fb9f3a"],
                            [0.8888888888888888, "#fdca26"],
                            [1.0, "#f0f921"],
                        ],
                        sequentialminus: [
                            [0.0, "#0d0887"],
                            [0.1111111111111111, "#46039f"],
                            [0.2222222222222222, "#7201a8"],
                            [0.3333333333333333, "#9c179e"],
                            [0.4444444444444444, "#bd3786"],
                            [0.5555555555555556, "#d8576b"],
                            [0.6666666666666666, "#ed7953"],
                            [0.7777777777777778, "#fb9f3a"],
                            [0.8888888888888888, "#fdca26"],
                            [1.0, "#f0f921"],
                        ],
                    },
                    colorway: ["#636efa", "#EF553B", "#00cc96", "#ab63fa", "#FFA15A", "#19d3f3", "#FF6692", "#B6E880", "#FF97FF", "#FECB52"],
                    font: { color: "#2a3f5f" },
                    geo: { bgcolor: "white", lakecolor: "white", landcolor: "#E5ECF6", showlakes: true, showland: true, subunitcolor: "white" },
                    hoverlabel: { align: "left" },
                    hovermode: "closest",
                    mapbox: { style: "light" },
                    paper_bgcolor: "white",
                    plot_bgcolor: "#E5ECF6",
                    polar: { angularaxis: { gridcolor: "white", linecolor: "white", ticks: "" }, bgcolor: "#E5ECF6", radialaxis: { gridcolor: "white", linecolor: "white", ticks: "" } },
                    scene: {
                        xaxis: { backgroundcolor: "#E5ECF6", gridcolor: "white", gridwidth: 2, linecolor: "white", showbackground: true, ticks: "", zerolinecolor: "white" },
                        yaxis: { backgroundcolor: "#E5ECF6", gridcolor: "white", gridwidth: 2, linecolor: "white", showbackground: true, ticks: "", zerolinecolor: "white" },
                        zaxis: { backgroundcolor: "#E5ECF6", gridcolor: "white", gridwidth: 2, linecolor: "white", showbackground: true, ticks: "", zerolinecolor: "white" },
                    },
                    shapedefaults: { line: { color: "#2a3f5f" } },
                    ternary: {
                        aaxis: { gridcolor: "white", linecolor: "white", ticks: "" },
                        baxis: { gridcolor: "white", linecolor: "white", ticks: "" },
                        bgcolor: "#E5ECF6",
                        caxis: { gridcolor: "white", linecolor: "white", ticks: "" },
                    },
                    title: { x: 0.05 },
                    xaxis: { automargin: true, gridcolor: "white", linecolor: "white", ticks: "", title: { standoff: 15 }, zerolinecolor: "white", zerolinewidth: 2 },
                    yaxis: { automargin: true, gridcolor: "white", linecolor: "white", ticks: "", title: { standoff: 15 }, zerolinecolor: "white", zerolinewidth: 2 },
                },
            },
            title: { text: "Comparison of the relative number of Videos of videos of different brands across the years" },
            updatemenus: [
                {
                    buttons: [
                        { args: [null, { frame: { duration: 500, redraw: false }, mode: "immediate", fromcurrent: true, transition: { duration: 500, easing: "linear" } }], label: "&#9654;", method: "animate" },
                        { args: [[null], { frame: { duration: 0, redraw: false }, mode: "immediate", fromcurrent: true, transition: { duration: 0, easing: "linear" } }], label: "&#9724;", method: "animate" },
                    ],
                    direction: "left",
                    pad: { r: 10, t: 70 },
                    showactive: false,
                    type: "buttons",
                    x: 0.1,
                    xanchor: "right",
                    y: 0,
                    yanchor: "top",
                },
            ],
            width: 1000,
            xaxis: { anchor: "y", domain: [0.0, 1.0], title: { text: "Month" } },
            yaxis: { anchor: "x", domain: [0.0, 1.0], range: [0, 1.1], title: { text: "value" } },
        },
        { responsive: true }
    )
        .then(function () {
            Plotly.addFrames("nbr_videos_comparison_all_brands_one_year", [
                {
                    data: [
                        {
                            hovertemplate: "<b>%{hovertext}</b><br><br>brand=Samsung<br>Year=2008<br>Month=%{x}<br>value=%{y}<extra></extra>",
                            hovertext: ["Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung"],
                            ids: ["Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung"],
                            legendgroup: "Samsung",
                            line: { color: "#636efa", dash: "solid", shape: "spline" },
                            marker: { symbol: "circle" },
                            mode: "lines",
                            name: "Samsung",
                            orientation: "v",
                            showlegend: true,
                            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                            xaxis: "x",
                            y: [
                                0.1935483870967742,
                                0.3548387096774194,
                                0.16129032258064516,
                                0.3225806451612903,
                                0.3548387096774194,
                                0.3548387096774194,
                                0.6129032258064516,
                                0.5161290322580645,
                                0.45161290322580644,
                                1.0,
                                0.6451612903225806,
                                0.967741935483871,
                            ],
                            yaxis: "y",
                            type: "scatter",
                        },
                        {
                            hovertemplate: "<b>%{hovertext}</b><br><br>brand=Apple<br>Year=2008<br>Month=%{x}<br>value=%{y}<extra></extra>",
                            hovertext: ["Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple"],
                            ids: ["Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple"],
                            legendgroup: "Apple",
                            line: { color: "#EF553B", dash: "solid", shape: "spline" },
                            marker: { symbol: "circle" },
                            mode: "lines",
                            name: "Apple",
                            orientation: "v",
                            showlegend: true,
                            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                            xaxis: "x",
                            y: [
                                0.03225806451612903,
                                0.03225806451612903,
                                0.03225806451612903,
                                0.06451612903225806,
                                0.0,
                                0.16129032258064516,
                                0.5161290322580645,
                                0.06451612903225806,
                                0.0967741935483871,
                                0.3870967741935484,
                                0.12903225806451613,
                                0.25806451612903225,
                            ],
                            yaxis: "y",
                            type: "scatter",
                        },
                        {
                            hovertemplate: "<b>%{hovertext}</b><br><br>brand=Huawei<br>Year=2008<br>Month=%{x}<br>value=%{y}<extra></extra>",
                            hovertext: ["Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei"],
                            ids: ["Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei"],
                            legendgroup: "Huawei",
                            line: { color: "#00cc96", dash: "solid", shape: "spline" },
                            marker: { symbol: "circle" },
                            mode: "lines",
                            name: "Huawei",
                            orientation: "v",
                            showlegend: true,
                            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                            xaxis: "x",
                            y: [
                                0.03225806451612903,
                                0.12903225806451613,
                                0.0967741935483871,
                                0.22580645161290322,
                                0.5806451612903226,
                                0.3870967741935484,
                                0.1935483870967742,
                                0.3548387096774194,
                                0.1935483870967742,
                                0.41935483870967744,
                                0.22580645161290322,
                                0.22580645161290322,
                            ],
                            yaxis: "y",
                            type: "scatter",
                        },
                        {
                            hovertemplate: "<b>%{hovertext}</b><br><br>brand=Xiaomi<br>Year=2008<br>Month=%{x}<br>value=%{y}<extra></extra>",
                            hovertext: ["Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi"],
                            ids: ["Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi"],
                            legendgroup: "Xiaomi",
                            line: { color: "#ab63fa", dash: "solid", shape: "spline" },
                            marker: { symbol: "circle" },
                            mode: "lines",
                            name: "Xiaomi",
                            orientation: "v",
                            showlegend: true,
                            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                            xaxis: "x",
                            y: [
                                0.7419354838709677,
                                0.3548387096774194,
                                0.16129032258064516,
                                0.5483870967741935,
                                0.22580645161290322,
                                0.6129032258064516,
                                0.41935483870967744,
                                0.3870967741935484,
                                0.41935483870967744,
                                0.6129032258064516,
                                0.5483870967741935,
                                0.7419354838709677,
                            ],
                            yaxis: "y",
                            type: "scatter",
                        },
                        {
                            hovertemplate: "<b>%{hovertext}</b><br><br>brand=Oppo<br>Year=2008<br>Month=%{x}<br>value=%{y}<extra></extra>",
                            hovertext: ["Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo"],
                            ids: ["Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo"],
                            legendgroup: "Oppo",
                            line: { color: "#FFA15A", dash: "solid", shape: "spline" },
                            marker: { symbol: "circle" },
                            mode: "lines",
                            name: "Oppo",
                            orientation: "v",
                            showlegend: true,
                            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                            xaxis: "x",
                            y: [0.0, 0.0, 0.06451612903225806, 0.0, 0.0, 0.06451612903225806, 0.06451612903225806, 0.16129032258064516, 0.03225806451612903, 0.06451612903225806, 0.0, 0.12903225806451613],
                            yaxis: "y",
                            type: "scatter",
                        },
                    ],
                    name: "2008",
                },
                {
                    data: [
                        {
                            hovertemplate: "<b>%{hovertext}</b><br><br>brand=Samsung<br>Year=2009<br>Month=%{x}<br>value=%{y}<extra></extra>",
                            hovertext: ["Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung"],
                            ids: ["Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung"],
                            legendgroup: "Samsung",
                            line: { color: "#636efa", dash: "solid", shape: "spline" },
                            marker: { symbol: "circle" },
                            mode: "lines",
                            name: "Samsung",
                            orientation: "v",
                            showlegend: true,
                            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                            xaxis: "x",
                            y: [
                                0.36486486486486486,
                                0.3918918918918919,
                                0.35135135135135137,
                                0.527027027027027,
                                0.4189189189189189,
                                0.4189189189189189,
                                0.3108108108108108,
                                0.44594594594594594,
                                0.43243243243243246,
                                0.6621621621621622,
                                1.0,
                                0.6216216216216216,
                            ],
                            yaxis: "y",
                            type: "scatter",
                        },
                        {
                            hovertemplate: "<b>%{hovertext}</b><br><br>brand=Apple<br>Year=2009<br>Month=%{x}<br>value=%{y}<extra></extra>",
                            hovertext: ["Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple"],
                            ids: ["Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple"],
                            legendgroup: "Apple",
                            line: { color: "#EF553B", dash: "solid", shape: "spline" },
                            marker: { symbol: "circle" },
                            mode: "lines",
                            name: "Apple",
                            orientation: "v",
                            showlegend: true,
                            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                            xaxis: "x",
                            y: [
                                0.06756756756756757,
                                0.02702702702702703,
                                0.04054054054054054,
                                0.06756756756756757,
                                0.02702702702702703,
                                0.36486486486486486,
                                0.0945945945945946,
                                0.06756756756756757,
                                0.13513513513513514,
                                0.0945945945945946,
                                0.0945945945945946,
                                0.08108108108108109,
                            ],
                            yaxis: "y",
                            type: "scatter",
                        },
                        {
                            hovertemplate: "<b>%{hovertext}</b><br><br>brand=Huawei<br>Year=2009<br>Month=%{x}<br>value=%{y}<extra></extra>",
                            hovertext: ["Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei"],
                            ids: ["Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei"],
                            legendgroup: "Huawei",
                            line: { color: "#00cc96", dash: "solid", shape: "spline" },
                            marker: { symbol: "circle" },
                            mode: "lines",
                            name: "Huawei",
                            orientation: "v",
                            showlegend: true,
                            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                            xaxis: "x",
                            y: [
                                0.13513513513513514,
                                0.44594594594594594,
                                0.22972972972972974,
                                0.4864864864864865,
                                0.5675675675675675,
                                0.4594594594594595,
                                0.33783783783783783,
                                0.25675675675675674,
                                0.25675675675675674,
                                0.28378378378378377,
                                0.21621621621621623,
                                0.14864864864864866,
                            ],
                            yaxis: "y",
                            type: "scatter",
                        },
                        {
                            hovertemplate: "<b>%{hovertext}</b><br><br>brand=Xiaomi<br>Year=2009<br>Month=%{x}<br>value=%{y}<extra></extra>",
                            hovertext: ["Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi"],
                            ids: ["Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi"],
                            legendgroup: "Xiaomi",
                            line: { color: "#ab63fa", dash: "solid", shape: "spline" },
                            marker: { symbol: "circle" },
                            mode: "lines",
                            name: "Xiaomi",
                            orientation: "v",
                            showlegend: true,
                            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                            xaxis: "x",
                            y: [
                                0.40540540540540543,
                                0.3918918918918919,
                                0.4189189189189189,
                                0.5540540540540541,
                                0.35135135135135137,
                                0.35135135135135137,
                                0.6081081081081081,
                                0.5,
                                0.6756756756756757,
                                0.6756756756756757,
                                0.5945945945945946,
                                0.8378378378378378,
                            ],
                            yaxis: "y",
                            type: "scatter",
                        },
                        {
                            hovertemplate: "<b>%{hovertext}</b><br><br>brand=Oppo<br>Year=2009<br>Month=%{x}<br>value=%{y}<extra></extra>",
                            hovertext: ["Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo"],
                            ids: ["Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo"],
                            legendgroup: "Oppo",
                            line: { color: "#FFA15A", dash: "solid", shape: "spline" },
                            marker: { symbol: "circle" },
                            mode: "lines",
                            name: "Oppo",
                            orientation: "v",
                            showlegend: true,
                            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                            xaxis: "x",
                            y: [0.013513513513513514, 0.0, 0.0, 0.013513513513513514, 0.013513513513513514, 0.0, 0.0, 0.04054054054054054, 0.013513513513513514, 0.013513513513513514, 0.013513513513513514, 0.0],
                            yaxis: "y",
                            type: "scatter",
                        },
                    ],
                    name: "2009",
                },
                {
                    data: [
                        {
                            hovertemplate: "<b>%{hovertext}</b><br><br>brand=Samsung<br>Year=2010<br>Month=%{x}<br>value=%{y}<extra></extra>",
                            hovertext: ["Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung"],
                            ids: ["Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung"],
                            legendgroup: "Samsung",
                            line: { color: "#636efa", dash: "solid", shape: "spline" },
                            marker: { symbol: "circle" },
                            mode: "lines",
                            name: "Samsung",
                            orientation: "v",
                            showlegend: true,
                            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                            xaxis: "x",
                            y: [
                                0.13427561837455831,
                                0.21908127208480566,
                                0.1978798586572438,
                                0.18374558303886926,
                                0.15901060070671377,
                                0.2968197879858657,
                                0.45229681978798586,
                                0.2968197879858657,
                                0.5901060070671378,
                                0.43109540636042404,
                                0.6996466431095406,
                                0.44876325088339225,
                            ],
                            yaxis: "y",
                            type: "scatter",
                        },
                        {
                            hovertemplate: "<b>%{hovertext}</b><br><br>brand=Apple<br>Year=2010<br>Month=%{x}<br>value=%{y}<extra></extra>",
                            hovertext: ["Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple"],
                            ids: ["Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple"],
                            legendgroup: "Apple",
                            line: { color: "#EF553B", dash: "solid", shape: "spline" },
                            marker: { symbol: "circle" },
                            mode: "lines",
                            name: "Apple",
                            orientation: "v",
                            showlegend: true,
                            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                            xaxis: "x",
                            y: [
                                0.038869257950530034,
                                0.0176678445229682,
                                0.045936395759717315,
                                0.17667844522968199,
                                0.07420494699646643,
                                1.0,
                                0.4911660777385159,
                                0.2791519434628975,
                                0.45229681978798586,
                                0.4028268551236749,
                                0.24734982332155478,
                                0.26148409893992935,
                            ],
                            yaxis: "y",
                            type: "scatter",
                        },
                        {
                            hovertemplate: "<b>%{hovertext}</b><br><br>brand=Huawei<br>Year=2010<br>Month=%{x}<br>value=%{y}<extra></extra>",
                            hovertext: ["Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei"],
                            ids: ["Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei"],
                            legendgroup: "Huawei",
                            line: { color: "#00cc96", dash: "solid", shape: "spline" },
                            marker: { symbol: "circle" },
                            mode: "lines",
                            name: "Huawei",
                            orientation: "v",
                            showlegend: true,
                            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                            xaxis: "x",
                            y: [
                                0.0812720848056537,
                                0.08833922261484099,
                                0.14487632508833923,
                                0.14840989399293286,
                                0.10600706713780919,
                                0.1696113074204947,
                                0.0989399293286219,
                                0.0989399293286219,
                                0.1413427561837456,
                                0.24028268551236748,
                                0.13780918727915195,
                                0.18374558303886926,
                            ],
                            yaxis: "y",
                            type: "scatter",
                        },
                        {
                            hovertemplate: "<b>%{hovertext}</b><br><br>brand=Xiaomi<br>Year=2010<br>Month=%{x}<br>value=%{y}<extra></extra>",
                            hovertext: ["Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi"],
                            ids: ["Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi"],
                            legendgroup: "Xiaomi",
                            line: { color: "#ab63fa", dash: "solid", shape: "spline" },
                            marker: { symbol: "circle" },
                            mode: "lines",
                            name: "Xiaomi",
                            orientation: "v",
                            showlegend: true,
                            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                            xaxis: "x",
                            y: [
                                0.12014134275618374,
                                0.13780918727915195,
                                0.2049469964664311,
                                0.24381625441696114,
                                0.2826855123674912,
                                0.18021201413427562,
                                0.24381625441696114,
                                0.22614840989399293,
                                0.2579505300353357,
                                0.3321554770318021,
                                0.29328621908127206,
                                0.3462897526501767,
                            ],
                            yaxis: "y",
                            type: "scatter",
                        },
                        {
                            hovertemplate: "<b>%{hovertext}</b><br><br>brand=Oppo<br>Year=2010<br>Month=%{x}<br>value=%{y}<extra></extra>",
                            hovertext: ["Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo"],
                            ids: ["Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo"],
                            legendgroup: "Oppo",
                            line: { color: "#FFA15A", dash: "solid", shape: "spline" },
                            marker: { symbol: "circle" },
                            mode: "lines",
                            name: "Oppo",
                            orientation: "v",
                            showlegend: true,
                            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                            xaxis: "x",
                            y: [
                                0.01060070671378092,
                                0.0035335689045936395,
                                0.0176678445229682,
                                0.007067137809187279,
                                0.014134275618374558,
                                0.0035335689045936395,
                                0.0035335689045936395,
                                0.0176678445229682,
                                0.0,
                                0.024734982332155476,
                                0.0176678445229682,
                                0.007067137809187279,
                            ],
                            yaxis: "y",
                            type: "scatter",
                        },
                    ],
                    name: "2010",
                },
                {
                    data: [
                        {
                            hovertemplate: "<b>%{hovertext}</b><br><br>brand=Samsung<br>Year=2011<br>Month=%{x}<br>value=%{y}<extra></extra>",
                            hovertext: ["Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung"],
                            ids: ["Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung"],
                            legendgroup: "Samsung",
                            line: { color: "#636efa", dash: "solid", shape: "spline" },
                            marker: { symbol: "circle" },
                            mode: "lines",
                            name: "Samsung",
                            orientation: "v",
                            showlegend: true,
                            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                            xaxis: "x",
                            y: [
                                0.28073394495412846,
                                0.23853211009174313,
                                0.25688073394495414,
                                0.23119266055045873,
                                0.5192660550458715,
                                0.3431192660550459,
                                0.28623853211009176,
                                0.3137614678899083,
                                0.5302752293577981,
                                0.4935779816513762,
                                0.7321100917431193,
                                0.7522935779816514,
                            ],
                            yaxis: "y",
                            type: "scatter",
                        },
                        {
                            hovertemplate: "<b>%{hovertext}</b><br><br>brand=Apple<br>Year=2011<br>Month=%{x}<br>value=%{y}<extra></extra>",
                            hovertext: ["Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple"],
                            ids: ["Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple"],
                            legendgroup: "Apple",
                            line: { color: "#EF553B", dash: "solid", shape: "spline" },
                            marker: { symbol: "circle" },
                            mode: "lines",
                            name: "Apple",
                            orientation: "v",
                            showlegend: true,
                            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                            xaxis: "x",
                            y: [
                                0.21651376146788992,
                                0.25871559633027524,
                                0.26055045871559634,
                                0.21100917431192662,
                                0.1889908256880734,
                                0.1798165137614679,
                                0.26422018348623855,
                                0.2,
                                0.3155963302752294,
                                1.0,
                                0.46055045871559636,
                                0.44954128440366975,
                            ],
                            yaxis: "y",
                            type: "scatter",
                        },
                        {
                            hovertemplate: "<b>%{hovertext}</b><br><br>brand=Huawei<br>Year=2011<br>Month=%{x}<br>value=%{y}<extra></extra>",
                            hovertext: ["Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei"],
                            ids: ["Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei"],
                            legendgroup: "Huawei",
                            line: { color: "#00cc96", dash: "solid", shape: "spline" },
                            marker: { symbol: "circle" },
                            mode: "lines",
                            name: "Huawei",
                            orientation: "v",
                            showlegend: true,
                            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                            xaxis: "x",
                            y: [
                                0.10642201834862386,
                                0.1596330275229358,
                                0.29908256880733947,
                                0.3174311926605505,
                                0.3467889908256881,
                                0.30825688073394497,
                                0.13211009174311927,
                                0.163302752293578,
                                0.13211009174311927,
                                0.1669724770642202,
                                0.07522935779816514,
                                0.06605504587155964,
                            ],
                            yaxis: "y",
                            type: "scatter",
                        },
                        {
                            hovertemplate: "<b>%{hovertext}</b><br><br>brand=Xiaomi<br>Year=2011<br>Month=%{x}<br>value=%{y}<extra></extra>",
                            hovertext: ["Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi"],
                            ids: ["Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi"],
                            legendgroup: "Xiaomi",
                            line: { color: "#ab63fa", dash: "solid", shape: "spline" },
                            marker: { symbol: "circle" },
                            mode: "lines",
                            name: "Xiaomi",
                            orientation: "v",
                            showlegend: true,
                            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                            xaxis: "x",
                            y: [
                                0.163302752293578,
                                0.1944954128440367,
                                0.2018348623853211,
                                0.1743119266055046,
                                0.21834862385321102,
                                0.30091743119266057,
                                0.24770642201834864,
                                0.20733944954128442,
                                0.23119266055045873,
                                0.23486238532110093,
                                0.24036697247706423,
                                0.14862385321100918,
                            ],
                            yaxis: "y",
                            type: "scatter",
                        },
                        {
                            hovertemplate: "<b>%{hovertext}</b><br><br>brand=Oppo<br>Year=2011<br>Month=%{x}<br>value=%{y}<extra></extra>",
                            hovertext: ["Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo"],
                            ids: ["Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo"],
                            legendgroup: "Oppo",
                            line: { color: "#FFA15A", dash: "solid", shape: "spline" },
                            marker: { symbol: "circle" },
                            mode: "lines",
                            name: "Oppo",
                            orientation: "v",
                            showlegend: true,
                            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                            xaxis: "x",
                            y: [
                                0.001834862385321101,
                                0.003669724770642202,
                                0.003669724770642202,
                                0.0,
                                0.001834862385321101,
                                0.011009174311926606,
                                0.009174311926605505,
                                0.009174311926605505,
                                0.005504587155963303,
                                0.003669724770642202,
                                0.007339449541284404,
                                0.005504587155963303,
                            ],
                            yaxis: "y",
                            type: "scatter",
                        },
                    ],
                    name: "2011",
                },
                {
                    data: [
                        {
                            hovertemplate: "<b>%{hovertext}</b><br><br>brand=Samsung<br>Year=2012<br>Month=%{x}<br>value=%{y}<extra></extra>",
                            hovertext: ["Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung"],
                            ids: ["Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung"],
                            legendgroup: "Samsung",
                            line: { color: "#636efa", dash: "solid", shape: "spline" },
                            marker: { symbol: "circle" },
                            mode: "lines",
                            name: "Samsung",
                            orientation: "v",
                            showlegend: true,
                            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                            xaxis: "x",
                            y: [
                                0.4139344262295082,
                                0.41290983606557374,
                                0.4026639344262295,
                                0.3125,
                                0.5655737704918032,
                                0.6198770491803278,
                                0.5922131147540983,
                                0.5983606557377049,
                                0.41700819672131145,
                                0.5891393442622951,
                                0.5204918032786885,
                                0.4610655737704918,
                            ],
                            yaxis: "y",
                            type: "scatter",
                        },
                        {
                            hovertemplate: "<b>%{hovertext}</b><br><br>brand=Apple<br>Year=2012<br>Month=%{x}<br>value=%{y}<extra></extra>",
                            hovertext: ["Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple"],
                            ids: ["Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple"],
                            legendgroup: "Apple",
                            line: { color: "#EF553B", dash: "solid", shape: "spline" },
                            marker: { symbol: "circle" },
                            mode: "lines",
                            name: "Apple",
                            orientation: "v",
                            showlegend: true,
                            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                            xaxis: "x",
                            y: [
                                0.30327868852459017,
                                0.1915983606557377,
                                0.23975409836065573,
                                0.2489754098360656,
                                0.2510245901639344,
                                0.18545081967213115,
                                0.1987704918032787,
                                0.2038934426229508,
                                1.0,
                                0.5327868852459017,
                                0.39651639344262296,
                                0.3176229508196721,
                            ],
                            yaxis: "y",
                            type: "scatter",
                        },
                        {
                            hovertemplate: "<b>%{hovertext}</b><br><br>brand=Huawei<br>Year=2012<br>Month=%{x}<br>value=%{y}<extra></extra>",
                            hovertext: ["Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei"],
                            ids: ["Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei"],
                            legendgroup: "Huawei",
                            line: { color: "#00cc96", dash: "solid", shape: "spline" },
                            marker: { symbol: "circle" },
                            mode: "lines",
                            name: "Huawei",
                            orientation: "v",
                            showlegend: true,
                            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                            xaxis: "x",
                            y: [
                                0.07172131147540983,
                                0.07889344262295082,
                                0.0706967213114754,
                                0.11987704918032786,
                                0.13114754098360656,
                                0.13012295081967212,
                                0.0860655737704918,
                                0.11270491803278689,
                                0.08504098360655737,
                                0.09221311475409837,
                                0.09733606557377049,
                                0.08401639344262295,
                            ],
                            yaxis: "y",
                            type: "scatter",
                        },
                        {
                            hovertemplate: "<b>%{hovertext}</b><br><br>brand=Xiaomi<br>Year=2012<br>Month=%{x}<br>value=%{y}<extra></extra>",
                            hovertext: ["Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi"],
                            ids: ["Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi"],
                            legendgroup: "Xiaomi",
                            line: { color: "#ab63fa", dash: "solid", shape: "spline" },
                            marker: { symbol: "circle" },
                            mode: "lines",
                            name: "Xiaomi",
                            orientation: "v",
                            showlegend: true,
                            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                            xaxis: "x",
                            y: [
                                0.09938524590163934,
                                0.18954918032786885,
                                0.11782786885245902,
                                0.1096311475409836,
                                0.12295081967213115,
                                0.15778688524590165,
                                0.12807377049180327,
                                0.13114754098360656,
                                0.13114754098360656,
                                0.18545081967213115,
                                0.15163934426229508,
                                0.1598360655737705,
                            ],
                            yaxis: "y",
                            type: "scatter",
                        },
                        {
                            hovertemplate: "<b>%{hovertext}</b><br><br>brand=Oppo<br>Year=2012<br>Month=%{x}<br>value=%{y}<extra></extra>",
                            hovertext: ["Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo"],
                            ids: ["Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo"],
                            legendgroup: "Oppo",
                            line: { color: "#FFA15A", dash: "solid", shape: "spline" },
                            marker: { symbol: "circle" },
                            mode: "lines",
                            name: "Oppo",
                            orientation: "v",
                            showlegend: true,
                            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                            xaxis: "x",
                            y: [
                                0.007172131147540984,
                                0.0020491803278688526,
                                0.006147540983606557,
                                0.004098360655737705,
                                0.005122950819672131,
                                0.0020491803278688526,
                                0.006147540983606557,
                                0.005122950819672131,
                                0.007172131147540984,
                                0.014344262295081968,
                                0.006147540983606557,
                                0.00819672131147541,
                            ],
                            yaxis: "y",
                            type: "scatter",
                        },
                    ],
                    name: "2012",
                },
                {
                    data: [
                        {
                            hovertemplate: "<b>%{hovertext}</b><br><br>brand=Samsung<br>Year=2013<br>Month=%{x}<br>value=%{y}<extra></extra>",
                            hovertext: ["Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung"],
                            ids: ["Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung"],
                            legendgroup: "Samsung",
                            line: { color: "#636efa", dash: "solid", shape: "spline" },
                            marker: { symbol: "circle" },
                            mode: "lines",
                            name: "Samsung",
                            orientation: "v",
                            showlegend: true,
                            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                            xaxis: "x",
                            y: [
                                0.43478260869565216,
                                0.3826086956521739,
                                0.5497584541062802,
                                0.6985507246376812,
                                0.927536231884058,
                                0.7690821256038647,
                                0.6956521739130435,
                                0.5294685990338164,
                                0.7236714975845411,
                                0.8164251207729468,
                                0.45314009661835747,
                                0.4057971014492754,
                            ],
                            yaxis: "y",
                            type: "scatter",
                        },
                        {
                            hovertemplate: "<b>%{hovertext}</b><br><br>brand=Apple<br>Year=2013<br>Month=%{x}<br>value=%{y}<extra></extra>",
                            hovertext: ["Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple"],
                            ids: ["Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple"],
                            legendgroup: "Apple",
                            line: { color: "#EF553B", dash: "solid", shape: "spline" },
                            marker: { symbol: "circle" },
                            mode: "lines",
                            name: "Apple",
                            orientation: "v",
                            showlegend: true,
                            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                            xaxis: "x",
                            y: [
                                0.3719806763285024,
                                0.3545893719806763,
                                0.35942028985507246,
                                0.3516908212560386,
                                0.26570048309178745,
                                0.46859903381642515,
                                0.3294685990338164,
                                0.4280193236714976,
                                1.0,
                                0.48405797101449277,
                                0.3690821256038647,
                                0.34202898550724636,
                            ],
                            yaxis: "y",
                            type: "scatter",
                        },
                        {
                            hovertemplate: "<b>%{hovertext}</b><br><br>brand=Huawei<br>Year=2013<br>Month=%{x}<br>value=%{y}<extra></extra>",
                            hovertext: ["Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei"],
                            ids: ["Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei"],
                            legendgroup: "Huawei",
                            line: { color: "#00cc96", dash: "solid", shape: "spline" },
                            marker: { symbol: "circle" },
                            mode: "lines",
                            name: "Huawei",
                            orientation: "v",
                            showlegend: true,
                            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                            xaxis: "x",
                            y: [
                                0.1932367149758454,
                                0.11980676328502415,
                                0.12173913043478261,
                                0.13140096618357489,
                                0.1285024154589372,
                                0.12077294685990338,
                                0.11400966183574879,
                                0.10338164251207729,
                                0.1246376811594203,
                                0.07342995169082125,
                                0.1246376811594203,
                                0.08502415458937199,
                            ],
                            yaxis: "y",
                            type: "scatter",
                        },
                        {
                            hovertemplate: "<b>%{hovertext}</b><br><br>brand=Xiaomi<br>Year=2013<br>Month=%{x}<br>value=%{y}<extra></extra>",
                            hovertext: ["Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi"],
                            ids: ["Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi"],
                            legendgroup: "Xiaomi",
                            line: { color: "#ab63fa", dash: "solid", shape: "spline" },
                            marker: { symbol: "circle" },
                            mode: "lines",
                            name: "Xiaomi",
                            orientation: "v",
                            showlegend: true,
                            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                            xaxis: "x",
                            y: [
                                0.17391304347826086,
                                0.1565217391304348,
                                0.16231884057971013,
                                0.1294685990338164,
                                0.3033816425120773,
                                0.21835748792270532,
                                0.15942028985507245,
                                0.18647342995169083,
                                0.20096618357487922,
                                0.1603864734299517,
                                0.19710144927536233,
                                0.16908212560386474,
                            ],
                            yaxis: "y",
                            type: "scatter",
                        },
                        {
                            hovertemplate: "<b>%{hovertext}</b><br><br>brand=Oppo<br>Year=2013<br>Month=%{x}<br>value=%{y}<extra></extra>",
                            hovertext: ["Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo"],
                            ids: ["Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo"],
                            legendgroup: "Oppo",
                            line: { color: "#FFA15A", dash: "solid", shape: "spline" },
                            marker: { symbol: "circle" },
                            mode: "lines",
                            name: "Oppo",
                            orientation: "v",
                            showlegend: true,
                            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                            xaxis: "x",
                            y: [
                                0.00966183574879227,
                                0.01932367149758454,
                                0.011594202898550725,
                                0.014492753623188406,
                                0.02608695652173913,
                                0.020289855072463767,
                                0.012560386473429951,
                                0.01642512077294686,
                                0.012560386473429951,
                                0.007729468599033816,
                                0.020289855072463767,
                                0.02608695652173913,
                            ],
                            yaxis: "y",
                            type: "scatter",
                        },
                    ],
                    name: "2013",
                },
                {
                    data: [
                        {
                            hovertemplate: "<b>%{hovertext}</b><br><br>brand=Samsung<br>Year=2014<br>Month=%{x}<br>value=%{y}<extra></extra>",
                            hovertext: ["Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung"],
                            ids: ["Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung"],
                            legendgroup: "Samsung",
                            line: { color: "#636efa", dash: "solid", shape: "spline" },
                            marker: { symbol: "circle" },
                            mode: "lines",
                            name: "Samsung",
                            orientation: "v",
                            showlegend: true,
                            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                            xaxis: "x",
                            y: [
                                0.5190069821567106,
                                0.5515903801396431,
                                0.4134988363072149,
                                0.7408844065166796,
                                0.5275407292474786,
                                0.48099301784328935,
                                0.43289371605896043,
                                0.32583397982932505,
                                0.42901474010861135,
                                0.4778898370830101,
                                0.5104732350659426,
                                0.4437548487199379,
                            ],
                            yaxis: "y",
                            type: "scatter",
                        },
                        {
                            hovertemplate: "<b>%{hovertext}</b><br><br>brand=Apple<br>Year=2014<br>Month=%{x}<br>value=%{y}<extra></extra>",
                            hovertext: ["Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple"],
                            ids: ["Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple"],
                            legendgroup: "Apple",
                            line: { color: "#EF553B", dash: "solid", shape: "spline" },
                            marker: { symbol: "circle" },
                            mode: "lines",
                            name: "Apple",
                            orientation: "v",
                            showlegend: true,
                            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                            xaxis: "x",
                            y: [
                                0.40884406516679594,
                                0.26066718386346005,
                                0.3661753297129558,
                                0.22963537626066718,
                                0.2513576415826222,
                                0.30411171450737007,
                                0.24670287044220326,
                                0.21722265321955003,
                                1.0,
                                0.6113266097750194,
                                0.32505818463925523,
                                0.2924747866563227,
                            ],
                            yaxis: "y",
                            type: "scatter",
                        },
                        {
                            hovertemplate: "<b>%{hovertext}</b><br><br>brand=Huawei<br>Year=2014<br>Month=%{x}<br>value=%{y}<extra></extra>",
                            hovertext: ["Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei"],
                            ids: ["Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei"],
                            legendgroup: "Huawei",
                            line: { color: "#00cc96", dash: "solid", shape: "spline" },
                            marker: { symbol: "circle" },
                            mode: "lines",
                            name: "Huawei",
                            orientation: "v",
                            showlegend: true,
                            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                            xaxis: "x",
                            y: [
                                0.08921644685802949,
                                0.11481768813033359,
                                0.1295577967416602,
                                0.08301008533747091,
                                0.15205585725368503,
                                0.0969743987587277,
                                0.08378588052754073,
                                0.07525213343677269,
                                0.14507370054305663,
                                0.10861132660977502,
                                0.10705973622963538,
                                0.1186966640806827,
                            ],
                            yaxis: "y",
                            type: "scatter",
                        },
                        {
                            hovertemplate: "<b>%{hovertext}</b><br><br>brand=Xiaomi<br>Year=2014<br>Month=%{x}<br>value=%{y}<extra></extra>",
                            hovertext: ["Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi"],
                            ids: ["Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi"],
                            legendgroup: "Xiaomi",
                            line: { color: "#ab63fa", dash: "solid", shape: "spline" },
                            marker: { symbol: "circle" },
                            mode: "lines",
                            name: "Xiaomi",
                            orientation: "v",
                            showlegend: true,
                            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                            xaxis: "x",
                            y: [
                                0.17377812257564004,
                                0.1551590380139643,
                                0.1582622187742436,
                                0.18463925523661753,
                                0.18929402637703646,
                                0.22265321955003878,
                                0.24282389449185415,
                                0.3110938712179985,
                                0.3134212567882079,
                                0.22575640031031807,
                                0.17843289371605897,
                                0.27230411171450736,
                            ],
                            yaxis: "y",
                            type: "scatter",
                        },
                        {
                            hovertemplate: "<b>%{hovertext}</b><br><br>brand=Oppo<br>Year=2014<br>Month=%{x}<br>value=%{y}<extra></extra>",
                            hovertext: ["Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo"],
                            ids: ["Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo"],
                            legendgroup: "Oppo",
                            line: { color: "#FFA15A", dash: "solid", shape: "spline" },
                            marker: { symbol: "circle" },
                            mode: "lines",
                            name: "Oppo",
                            orientation: "v",
                            showlegend: true,
                            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                            xaxis: "x",
                            y: [
                                0.02948021722265322,
                                0.019394879751745538,
                                0.02404965089216447,
                                0.02094647013188518,
                                0.027152831652443754,
                                0.027928626842513578,
                                0.03646237393328161,
                                0.022498060512024826,
                                0.02017067494181536,
                                0.030256012412723042,
                                0.013964313421256789,
                                0.035686578743211794,
                            ],
                            yaxis: "y",
                            type: "scatter",
                        },
                    ],
                    name: "2014",
                },
                {
                    data: [
                        {
                            hovertemplate: "<b>%{hovertext}</b><br><br>brand=Samsung<br>Year=2015<br>Month=%{x}<br>value=%{y}<extra></extra>",
                            hovertext: ["Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung"],
                            ids: ["Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung"],
                            legendgroup: "Samsung",
                            line: { color: "#636efa", dash: "solid", shape: "spline" },
                            marker: { symbol: "circle" },
                            mode: "lines",
                            name: "Samsung",
                            orientation: "v",
                            showlegend: true,
                            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                            xaxis: "x",
                            y: [
                                0.5878661087866108,
                                0.5188284518828452,
                                0.9069037656903766,
                                1.0,
                                0.7290794979079498,
                                0.5313807531380753,
                                0.5156903765690377,
                                0.9320083682008368,
                                0.9476987447698745,
                                0.6935146443514645,
                                0.5951882845188284,
                                0.5711297071129707,
                            ],
                            yaxis: "y",
                            type: "scatter",
                        },
                        {
                            hovertemplate: "<b>%{hovertext}</b><br><br>brand=Apple<br>Year=2015<br>Month=%{x}<br>value=%{y}<extra></extra>",
                            hovertext: ["Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple"],
                            ids: ["Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple"],
                            legendgroup: "Apple",
                            line: { color: "#EF553B", dash: "solid", shape: "spline" },
                            marker: { symbol: "circle" },
                            mode: "lines",
                            name: "Apple",
                            orientation: "v",
                            showlegend: true,
                            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                            xaxis: "x",
                            y: [
                                0.399581589958159,
                                0.3378661087866109,
                                0.3912133891213389,
                                0.33263598326359833,
                                0.303347280334728,
                                0.40794979079497906,
                                0.42677824267782427,
                                0.3158995815899582,
                                0.9769874476987448,
                                0.7050209205020921,
                                0.42782426778242677,
                                0.49581589958158995,
                            ],
                            yaxis: "y",
                            type: "scatter",
                        },
                        {
                            hovertemplate: "<b>%{hovertext}</b><br><br>brand=Huawei<br>Year=2015<br>Month=%{x}<br>value=%{y}<extra></extra>",
                            hovertext: ["Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei"],
                            ids: ["Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei"],
                            legendgroup: "Huawei",
                            line: { color: "#00cc96", dash: "solid", shape: "spline" },
                            marker: { symbol: "circle" },
                            mode: "lines",
                            name: "Huawei",
                            orientation: "v",
                            showlegend: true,
                            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                            xaxis: "x",
                            y: [
                                0.19351464435146443,
                                0.1202928870292887,
                                0.22071129707112971,
                                0.19142259414225943,
                                0.24476987447698745,
                                0.23430962343096234,
                                0.23117154811715482,
                                0.22384937238493724,
                                0.30962343096234307,
                                0.350418410041841,
                                0.39330543933054396,
                                0.32217573221757323,
                            ],
                            yaxis: "y",
                            type: "scatter",
                        },
                        {
                            hovertemplate: "<b>%{hovertext}</b><br><br>brand=Xiaomi<br>Year=2015<br>Month=%{x}<br>value=%{y}<extra></extra>",
                            hovertext: ["Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi"],
                            ids: ["Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi"],
                            legendgroup: "Xiaomi",
                            line: { color: "#ab63fa", dash: "solid", shape: "spline" },
                            marker: { symbol: "circle" },
                            mode: "lines",
                            name: "Xiaomi",
                            orientation: "v",
                            showlegend: true,
                            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                            xaxis: "x",
                            y: [
                                0.4382845188284519,
                                0.3891213389121339,
                                0.35355648535564854,
                                0.3786610878661088,
                                0.3776150627615063,
                                0.3619246861924686,
                                0.41422594142259417,
                                0.3702928870292887,
                                0.35669456066945604,
                                0.4341004184100418,
                                0.39539748953974896,
                                0.4089958158995816,
                            ],
                            yaxis: "y",
                            type: "scatter",
                        },
                        {
                            hovertemplate: "<b>%{hovertext}</b><br><br>brand=Oppo<br>Year=2015<br>Month=%{x}<br>value=%{y}<extra></extra>",
                            hovertext: ["Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo"],
                            ids: ["Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo"],
                            legendgroup: "Oppo",
                            line: { color: "#FFA15A", dash: "solid", shape: "spline" },
                            marker: { symbol: "circle" },
                            mode: "lines",
                            name: "Oppo",
                            orientation: "v",
                            showlegend: true,
                            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                            xaxis: "x",
                            y: [
                                0.053347280334728034,
                                0.02405857740585774,
                                0.03765690376569038,
                                0.027196652719665274,
                                0.04811715481171548,
                                0.038702928870292884,
                                0.021966527196652718,
                                0.036610878661087864,
                                0.03138075313807531,
                                0.03556485355648536,
                                0.02301255230125523,
                                0.02301255230125523,
                            ],
                            yaxis: "y",
                            type: "scatter",
                        },
                    ],
                    name: "2015",
                },
                {
                    data: [
                        {
                            hovertemplate: "<b>%{hovertext}</b><br><br>brand=Samsung<br>Year=2016<br>Month=%{x}<br>value=%{y}<extra></extra>",
                            hovertext: ["Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung"],
                            ids: ["Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung"],
                            legendgroup: "Samsung",
                            line: { color: "#636efa", dash: "solid", shape: "spline" },
                            marker: { symbol: "circle" },
                            mode: "lines",
                            name: "Samsung",
                            orientation: "v",
                            showlegend: true,
                            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                            xaxis: "x",
                            y: [
                                0.34289057928613226,
                                0.4142773551784669,
                                0.6653013458162669,
                                0.3856056173200702,
                                0.42012873025160913,
                                0.4148624926857812,
                                0.4002340550029257,
                                0.6822703335283792,
                                0.48683440608543005,
                                0.44587478057343477,
                                0.37390286717378585,
                                0.366296079578701,
                            ],
                            yaxis: "y",
                            type: "scatter",
                        },
                        {
                            hovertemplate: "<b>%{hovertext}</b><br><br>brand=Apple<br>Year=2016<br>Month=%{x}<br>value=%{y}<extra></extra>",
                            hovertext: ["Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple"],
                            ids: ["Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple"],
                            legendgroup: "Apple",
                            line: { color: "#EF553B", dash: "solid", shape: "spline" },
                            marker: { symbol: "circle" },
                            mode: "lines",
                            name: "Apple",
                            orientation: "v",
                            showlegend: true,
                            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                            xaxis: "x",
                            y: [
                                0.25629022820362785,
                                0.2235225277940316,
                                0.38677589233469867,
                                0.33703920421299005,
                                0.25570509069631364,
                                0.30778232884727913,
                                0.2820362785254535,
                                0.3171445289643066,
                                1.0,
                                0.6693973083674664,
                                0.4347571679344646,
                                0.3973083674663546,
                            ],
                            yaxis: "y",
                            type: "scatter",
                        },
                        {
                            hovertemplate: "<b>%{hovertext}</b><br><br>brand=Huawei<br>Year=2016<br>Month=%{x}<br>value=%{y}<extra></extra>",
                            hovertext: ["Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei"],
                            ids: ["Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei"],
                            legendgroup: "Huawei",
                            line: { color: "#00cc96", dash: "solid", shape: "spline" },
                            marker: { symbol: "circle" },
                            mode: "lines",
                            name: "Huawei",
                            orientation: "v",
                            showlegend: true,
                            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                            xaxis: "x",
                            y: [
                                0.22410766530134582,
                                0.17554125219426564,
                                0.17905207723815098,
                                0.16851960210649503,
                                0.18256290228203628,
                                0.2445874780573435,
                                0.17788180222352254,
                                0.23171445289643067,
                                0.22235225277940315,
                                0.19426565242832067,
                                0.25043885313048564,
                                0.2106495026331188,
                            ],
                            yaxis: "y",
                            type: "scatter",
                        },
                        {
                            hovertemplate: "<b>%{hovertext}</b><br><br>brand=Xiaomi<br>Year=2016<br>Month=%{x}<br>value=%{y}<extra></extra>",
                            hovertext: ["Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi"],
                            ids: ["Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi"],
                            legendgroup: "Xiaomi",
                            line: { color: "#ab63fa", dash: "solid", shape: "spline" },
                            marker: { symbol: "circle" },
                            mode: "lines",
                            name: "Xiaomi",
                            orientation: "v",
                            showlegend: true,
                            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                            xaxis: "x",
                            y: [
                                0.24575775307197192,
                                0.2732592159157402,
                                0.361029842012873,
                                0.3019309537741369,
                                0.3177296664716208,
                                0.3551784669397308,
                                0.30895260386190754,
                                0.41720304271503805,
                                0.39906377998829723,
                                0.4657694558221182,
                                0.4435342305441779,
                                0.46108835576360446,
                            ],
                            yaxis: "y",
                            type: "scatter",
                        },
                        {
                            hovertemplate: "<b>%{hovertext}</b><br><br>brand=Oppo<br>Year=2016<br>Month=%{x}<br>value=%{y}<extra></extra>",
                            hovertext: ["Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo"],
                            ids: ["Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo"],
                            legendgroup: "Oppo",
                            line: { color: "#FFA15A", dash: "solid", shape: "spline" },
                            marker: { symbol: "circle" },
                            mode: "lines",
                            name: "Oppo",
                            orientation: "v",
                            showlegend: true,
                            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                            xaxis: "x",
                            y: [
                                0.021064950263311878,
                                0.01930953774136922,
                                0.012287887653598596,
                                0.030427150380339378,
                                0.024575775307197192,
                                0.013458162668227034,
                                0.026916325336454067,
                                0.04505558806319485,
                                0.022235225277940317,
                                0.021064950263311878,
                                0.04154476301930954,
                                0.022820362785254535,
                            ],
                            yaxis: "y",
                            type: "scatter",
                        },
                    ],
                    name: "2016",
                },
                {
                    data: [
                        {
                            hovertemplate: "<b>%{hovertext}</b><br><br>brand=Samsung<br>Year=2017<br>Month=%{x}<br>value=%{y}<extra></extra>",
                            hovertext: ["Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung"],
                            ids: ["Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung"],
                            legendgroup: "Samsung",
                            line: { color: "#636efa", dash: "solid", shape: "spline" },
                            marker: { symbol: "circle" },
                            mode: "lines",
                            name: "Samsung",
                            orientation: "v",
                            showlegend: true,
                            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                            xaxis: "x",
                            y: [
                                0.5214327657075749,
                                0.4926600117439812,
                                0.6729301233118027,
                                0.8273634762184381,
                                0.7985907222548444,
                                0.6623605402231356,
                                0.6059894304169113,
                                0.7727539635936582,
                                0.7921315325895478,
                                0.6512037580739871,
                                0.540223135642983,
                                0.631238990017616,
                            ],
                            yaxis: "y",
                            type: "scatter",
                        },
                        {
                            hovertemplate: "<b>%{hovertext}</b><br><br>brand=Apple<br>Year=2017<br>Month=%{x}<br>value=%{y}<extra></extra>",
                            hovertext: ["Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple"],
                            ids: ["Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple"],
                            legendgroup: "Apple",
                            line: { color: "#EF553B", dash: "solid", shape: "spline" },
                            marker: { symbol: "circle" },
                            mode: "lines",
                            name: "Apple",
                            orientation: "v",
                            showlegend: true,
                            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                            xaxis: "x",
                            y: [
                                0.3981209630064592,
                                0.3734586024662361,
                                0.42454492072812683,
                                0.35290663534938344,
                                0.33881385789782736,
                                0.44627128596594245,
                                0.37522019964768055,
                                0.4556664709336465,
                                0.9618320610687023,
                                0.7087492660011744,
                                1.0,
                                0.5736934820904287,
                            ],
                            yaxis: "y",
                            type: "scatter",
                        },
                        {
                            hovertemplate: "<b>%{hovertext}</b><br><br>brand=Huawei<br>Year=2017<br>Month=%{x}<br>value=%{y}<extra></extra>",
                            hovertext: ["Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei"],
                            ids: ["Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei"],
                            legendgroup: "Huawei",
                            line: { color: "#00cc96", dash: "solid", shape: "spline" },
                            marker: { symbol: "circle" },
                            mode: "lines",
                            name: "Huawei",
                            orientation: "v",
                            showlegend: true,
                            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                            xaxis: "x",
                            y: [
                                0.275396359365825,
                                0.25190839694656486,
                                0.33294186729301234,
                                0.2748091603053435,
                                0.3241338813857898,
                                0.35466823253082796,
                                0.3446858485026424,
                                0.35877862595419846,
                                0.27422196124486203,
                                0.35819142689371697,
                                0.3405754550792719,
                                0.3499706400469759,
                            ],
                            yaxis: "y",
                            type: "scatter",
                        },
                        {
                            hovertemplate: "<b>%{hovertext}</b><br><br>brand=Xiaomi<br>Year=2017<br>Month=%{x}<br>value=%{y}<extra></extra>",
                            hovertext: ["Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi"],
                            ids: ["Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi"],
                            legendgroup: "Xiaomi",
                            line: { color: "#ab63fa", dash: "solid", shape: "spline" },
                            marker: { symbol: "circle" },
                            mode: "lines",
                            name: "Xiaomi",
                            orientation: "v",
                            showlegend: true,
                            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                            xaxis: "x",
                            y: [
                                0.5425719318849089,
                                0.5431591309453905,
                                0.624192601291838,
                                0.532002348796242,
                                0.6887844979448033,
                                0.6553141514973576,
                                0.7621843805049912,
                                0.7287140340575455,
                                0.8872577803875514,
                                0.8620082207868467,
                                0.9430416911332942,
                                0.9588960657662948,
                            ],
                            yaxis: "y",
                            type: "scatter",
                        },
                        {
                            hovertemplate: "<b>%{hovertext}</b><br><br>brand=Oppo<br>Year=2017<br>Month=%{x}<br>value=%{y}<extra></extra>",
                            hovertext: ["Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo"],
                            ids: ["Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo"],
                            legendgroup: "Oppo",
                            line: { color: "#FFA15A", dash: "solid", shape: "spline" },
                            marker: { symbol: "circle" },
                            mode: "lines",
                            name: "Oppo",
                            orientation: "v",
                            showlegend: true,
                            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                            xaxis: "x",
                            y: [
                                0.028185554903112156,
                                0.057545507927187316,
                                0.06165590135055784,
                                0.04521432765707575,
                                0.06283029947152084,
                                0.05695830886670581,
                                0.03405754550792719,
                                0.040516735173223725,
                                0.048150322959483266,
                                0.061068702290076333,
                                0.09688784497944804,
                                0.06576629477392835,
                            ],
                            yaxis: "y",
                            type: "scatter",
                        },
                    ],
                    name: "2017",
                },
                {
                    data: [
                        {
                            hovertemplate: "<b>%{hovertext}</b><br><br>brand=Samsung<br>Year=2018<br>Month=%{x}<br>value=%{y}<extra></extra>",
                            hovertext: ["Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung"],
                            ids: ["Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung", "Samsung"],
                            legendgroup: "Samsung",
                            line: { color: "#636efa", dash: "solid", shape: "spline" },
                            marker: { symbol: "circle" },
                            mode: "lines",
                            name: "Samsung",
                            orientation: "v",
                            showlegend: true,
                            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                            xaxis: "x",
                            y: [
                                0.44785276073619634,
                                0.4904366654637315,
                                0.6402020931071816,
                                0.4514615662215807,
                                0.5333814507398051,
                                0.4799711295561169,
                                0.5055936485023457,
                                0.6488632262721039,
                                0.5792132804041862,
                                0.5167809455070371,
                                0.5546734031035727,
                                0.5131721400216528,
                            ],
                            yaxis: "y",
                            type: "scatter",
                        },
                        {
                            hovertemplate: "<b>%{hovertext}</b><br><br>brand=Apple<br>Year=2018<br>Month=%{x}<br>value=%{y}<extra></extra>",
                            hovertext: ["Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple"],
                            ids: ["Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple", "Apple"],
                            legendgroup: "Apple",
                            line: { color: "#EF553B", dash: "solid", shape: "spline" },
                            marker: { symbol: "circle" },
                            mode: "lines",
                            name: "Apple",
                            orientation: "v",
                            showlegend: true,
                            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                            xaxis: "x",
                            y: [
                                0.3547455792132804,
                                0.29014796102490076,
                                0.28690003608805487,
                                0.2533381450739805,
                                0.2511728617827499,
                                0.286178274990978,
                                0.2742692168892097,
                                0.25839047275351856,
                                0.5727174305304944,
                                0.48430169613857815,
                                0.37026344280043305,
                                0.2952002887044388,
                            ],
                            yaxis: "y",
                            type: "scatter",
                        },
                        {
                            hovertemplate: "<b>%{hovertext}</b><br><br>brand=Huawei<br>Year=2018<br>Month=%{x}<br>value=%{y}<extra></extra>",
                            hovertext: ["Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei"],
                            ids: ["Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei", "Huawei"],
                            legendgroup: "Huawei",
                            line: { color: "#00cc96", dash: "solid", shape: "spline" },
                            marker: { symbol: "circle" },
                            mode: "lines",
                            name: "Huawei",
                            orientation: "v",
                            showlegend: true,
                            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                            xaxis: "x",
                            y: [
                                0.23168531216167448,
                                0.22482858173944426,
                                0.2865391555395164,
                                0.3035005413208228,
                                0.30494406351497655,
                                0.22194153735113678,
                                0.26560808372428724,
                                0.2659689642728257,
                                0.256225189462288,
                                0.38433778419343195,
                                0.346084446048358,
                                0.43846986647419706,
                            ],
                            yaxis: "y",
                            type: "scatter",
                        },
                        {
                            hovertemplate: "<b>%{hovertext}</b><br><br>brand=Xiaomi<br>Year=2018<br>Month=%{x}<br>value=%{y}<extra></extra>",
                            hovertext: ["Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi"],
                            ids: ["Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi", "Xiaomi"],
                            legendgroup: "Xiaomi",
                            line: { color: "#ab63fa", dash: "solid", shape: "spline" },
                            marker: { symbol: "circle" },
                            mode: "lines",
                            name: "Xiaomi",
                            orientation: "v",
                            showlegend: true,
                            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                            xaxis: "x",
                            y: [
                                0.5907614579574161,
                                0.6972212197762541,
                                0.7260916636593288,
                                0.6632984482136413,
                                0.6853121616744857,
                                0.7163478888487911,
                                0.7719234933237098,
                                0.8112594731143992,
                                0.8819920606279321,
                                1.0,
                                0.7426921688920968,
                                0.7358354384698664,
                            ],
                            yaxis: "y",
                            type: "scatter",
                        },
                        {
                            hovertemplate: "<b>%{hovertext}</b><br><br>brand=Oppo<br>Year=2018<br>Month=%{x}<br>value=%{y}<extra></extra>",
                            hovertext: ["Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo"],
                            ids: ["Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo", "Oppo"],
                            legendgroup: "Oppo",
                            line: { color: "#FFA15A", dash: "solid", shape: "spline" },
                            marker: { symbol: "circle" },
                            mode: "lines",
                            name: "Oppo",
                            orientation: "v",
                            showlegend: true,
                            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                            xaxis: "x",
                            y: [
                                0.04294478527607362,
                                0.04294478527607362,
                                0.049079754601226995,
                                0.07325875135330205,
                                0.07542403464453266,
                                0.06171057380007217,
                                0.05593648502345724,
                                0.1273908336340671,
                                0.11079032840129917,
                                0.07722843738722483,
                                0.12630819198845183,
                                0.0887766149404547,
                            ],
                            yaxis: "y",
                            type: "scatter",
                        },
                    ],
                    name: "2018",
                },
            ]);
        })
        .then(function () {
            Plotly.animate("nbr_videos_comparison_all_brands_one_year", null);
        });
}



// Time series Seasonality

window.PLOTLYENV = window.PLOTLYENV || {};
if (document.getElementById("time_series_seasonality")) {
    Plotly.newPlot("time_series_seasonality", [{
        "line": {
            "color": "rgb(0,100,80)",
            "shape": "spline"
        },
        "mode": "lines",
        "name": "Apple Phones",
        "x": ["2017-01-01T00:00:00", "2017-02-01T00:00:00", "2017-03-01T00:00:00", "2017-04-01T00:00:00", "2017-05-01T00:00:00", "2017-06-01T00:00:00", "2017-07-01T00:00:00", "2017-08-01T00:00:00", "2017-09-01T00:00:00", "2017-10-01T00:00:00", "2017-11-01T00:00:00", "2017-12-01T00:00:00"],
        "y": [-0.14593946658675455, -0.05004495055439017, -0.058036160223753845, -0.16591749076016382, -0.15592847867345916, 0.050644291279592454, -0.05483967635600837, -0.16032364399160923, 1.0, -0.054839676356008386, -0.054839676356008386, -0.14993507142143644],
        "type": "scatter"
    }, {
        "line": {
            "color": "rgb(0,176,246)",
            "shape": "spline"
        },
        "mode": "lines",
        "name": "Apple Videos",
        "x": ["2017-01-01T00:00:00", "2017-02-01T00:00:00", "2017-03-01T00:00:00", "2017-04-01T00:00:00", "2017-05-01T00:00:00", "2017-06-01T00:00:00", "2017-07-01T00:00:00", "2017-08-01T00:00:00", "2017-09-01T00:00:00", "2017-10-01T00:00:00", "2017-11-01T00:00:00", "2017-12-01T00:00:00"],
        "y": [-0.033816572393206616, -0.21528778245896416, -0.10382279319071136, -0.2337750548412412, -0.3088618100517999, -0.11775366120351548, -0.23243068998767386, -0.2547796278553655, 1.0, 0.45415177912006166, 0.1423674040873804, -0.09599119122496395],
        "type": "scatter"
    }, {
        "line": {
            "color": "rgb(0,100,80)",
            "shape": "spline"
        },
        "mode": "lines",
        "name": "Samsung Phones",
        "visible": false,
        "x": ["2017-01-01T00:00:00", "2017-02-01T00:00:00", "2017-03-01T00:00:00", "2017-04-01T00:00:00", "2017-05-01T00:00:00", "2017-06-01T00:00:00", "2017-07-01T00:00:00", "2017-08-01T00:00:00", "2017-09-01T00:00:00", "2017-10-01T00:00:00", "2017-11-01T00:00:00", "2017-12-01T00:00:00"],
        "y": [0.2184089563182087, 0.17441696511660693, -0.4414709117058177, -0.5939764812047038, -0.07780378443924318, -0.23030935393812924, 0.3953921209215759, 0.08056738388652329, -0.34762133047573385, 0.9017512196497561, 1.0, -1.079354784129043],
        "type": "scatter"
    }, {
        "line": {
            "color": "rgb(0,176,246)",
            "shape": "spline"
        },
        "mode": "lines",
        "name": "Samsung Videos",
        "visible": false,
        "x": ["2017-01-01T00:00:00", "2017-02-01T00:00:00", "2017-03-01T00:00:00", "2017-04-01T00:00:00", "2017-05-01T00:00:00", "2017-06-01T00:00:00", "2017-07-01T00:00:00", "2017-08-01T00:00:00", "2017-09-01T00:00:00", "2017-10-01T00:00:00", "2017-11-01T00:00:00", "2017-12-01T00:00:00"],
        "y": [-0.3332686711045429, -0.07677752843630466, 1.0, 0.4171496696981392, 0.40980858105276086, -0.09845417239365745, -0.2693771187838557, 0.30337009299958917, 0.13460532450886503, -0.21155692407047907, -0.5308486719893409, -0.7446505814811736],
        "type": "scatter"
    }, {
        "line": {
            "color": "rgb(0,100,80)",
            "shape": "spline"
        },
        "mode": "lines",
        "name": "Xiaomi Phones",
        "visible": false,
        "x": ["2017-01-01T00:00:00", "2017-02-01T00:00:00", "2017-03-01T00:00:00", "2017-04-01T00:00:00", "2017-05-01T00:00:00", "2017-06-01T00:00:00", "2017-07-01T00:00:00", "2017-08-01T00:00:00", "2017-09-01T00:00:00", "2017-10-01T00:00:00", "2017-11-01T00:00:00", "2017-12-01T00:00:00"],
        "y": [-0.8551859099804302, -0.6169974839250768, 0.5202683813251329, 0.1982107911657812, -0.33519709253564434, 0.3491752865529772, -0.23287671232876725, 0.882583170254403, -0.045009784735812165, -0.6673189823874754, 1.0, -0.19765166340508802],
        "type": "scatter"
    }, {
        "line": {
            "color": "rgb(0,176,246)",
            "shape": "spline"
        },
        "mode": "lines",
        "name": "Xiaomi Videos",
        "visible": false,
        "x": ["2017-01-01T00:00:00", "2017-02-01T00:00:00", "2017-03-01T00:00:00", "2017-04-01T00:00:00", "2017-05-01T00:00:00", "2017-06-01T00:00:00", "2017-07-01T00:00:00", "2017-08-01T00:00:00", "2017-09-01T00:00:00", "2017-10-01T00:00:00", "2017-11-01T00:00:00", "2017-12-01T00:00:00"],
        "y": [-0.1621951699956664, -0.6734822519008784, 1.0, -0.24012134105503607, -0.13816333766694264, -0.18244494346609924, -0.14667297009809688, 0.24981286687940782, 0.48800378205885814, 0.9426387739825868, -0.5961076310916762, -0.5412677776464572],
        "type": "scatter"
    }, {
        "line": {
            "color": "rgb(0,100,80)",
            "shape": "spline"
        },
        "mode": "lines",
        "name": "Huawei Phones",
        "visible": false,
        "x": ["2017-01-01T00:00:00", "2017-02-01T00:00:00", "2017-03-01T00:00:00", "2017-04-01T00:00:00", "2017-05-01T00:00:00", "2017-06-01T00:00:00", "2017-07-01T00:00:00", "2017-08-01T00:00:00", "2017-09-01T00:00:00", "2017-10-01T00:00:00", "2017-11-01T00:00:00", "2017-12-01T00:00:00"],
        "y": [1.0, -1.0154793871426313, 0.05133470225872685, 0.19728320960353812, 0.5864792291897013, -0.032064444795450904, -0.21718527878692157, 0.009635128731637903, -0.3448112462486179, -0.04248933817722321, 0.03395987995577322, -0.2266624545885325],
        "type": "scatter"
    }, {
        "line": {
            "color": "rgb(0,176,246)",
            "shape": "spline"
        },
        "mode": "lines",
        "name": "Huawei Videos",
        "visible": false,
        "x": ["2017-01-01T00:00:00", "2017-02-01T00:00:00", "2017-03-01T00:00:00", "2017-04-01T00:00:00", "2017-05-01T00:00:00", "2017-06-01T00:00:00", "2017-07-01T00:00:00", "2017-08-01T00:00:00", "2017-09-01T00:00:00", "2017-10-01T00:00:00", "2017-11-01T00:00:00", "2017-12-01T00:00:00"],
        "y": [0.7812240210623622, -0.09387989468819, 0.46971812211816216, 1.0, 0.5349685373867972, 0.07225279882383936, -0.49995188720467826, -0.4773877749330758, -0.704467549102657, -0.1828617490657443, -0.4709075335172664, -0.4287070908795489],
        "type": "scatter"
    }, {
        "line": {
            "color": "rgb(0,100,80)",
            "shape": "spline"
        },
        "mode": "lines",
        "name": "Oppo Phones",
        "visible": false,
        "x": ["2017-01-01T00:00:00", "2017-02-01T00:00:00", "2017-03-01T00:00:00", "2017-04-01T00:00:00", "2017-05-01T00:00:00", "2017-06-01T00:00:00", "2017-07-01T00:00:00", "2017-08-01T00:00:00", "2017-09-01T00:00:00", "2017-10-01T00:00:00", "2017-11-01T00:00:00", "2017-12-01T00:00:00"],
        "y": [-0.17275134397817543, -0.721575864559095, -0.4616063548102383, 0.32985637486961406, 1.0, -0.25363074701115307, -0.11401749177565602, 0.7082564390596167, -0.4240552034020701, -0.2825162480943594, 0.14884056808152124, 0.2431998716199953],
        "type": "scatter"
    }, {
        "line": {
            "color": "rgb(0,176,246)",
            "shape": "spline"
        },
        "mode": "lines",
        "name": "Oppo Videos",
        "visible": false,
        "x": ["2017-01-01T00:00:00", "2017-02-01T00:00:00", "2017-03-01T00:00:00", "2017-04-01T00:00:00", "2017-05-01T00:00:00", "2017-06-01T00:00:00", "2017-07-01T00:00:00", "2017-08-01T00:00:00", "2017-09-01T00:00:00", "2017-10-01T00:00:00", "2017-11-01T00:00:00", "2017-12-01T00:00:00"],
        "y": [-0.867832336133701, -0.010483189397034602, 0.327352001208953, 0.2299641232012628, 0.5851276396872394, -0.3741765407154091, -0.7093251691694609, 1.0, 0.09362109399049613, -0.6955565381407874, 0.7488064387939577, -0.32749752332551607],
        "type": "scatter"
    }], {
        "template": {
            "data": {
                "barpolar": [{
                    "marker": {
                        "line": {
                            "color": "#E5ECF6",
                            "width": 0.5
                        },
                        "pattern": {
                            "fillmode": "overlay",
                            "size": 10,
                            "solidity": 0.2
                        }
                    },
                    "type": "barpolar"
                }],
                "bar": [{
                    "error_x": {
                        "color": "#2a3f5f"
                    },
                    "error_y": {
                        "color": "#2a3f5f"
                    },
                    "marker": {
                        "line": {
                            "color": "#E5ECF6",
                            "width": 0.5
                        },
                        "pattern": {
                            "fillmode": "overlay",
                            "size": 10,
                            "solidity": 0.2
                        }
                    },
                    "type": "bar"
                }],
                "carpet": [{
                    "aaxis": {
                        "endlinecolor": "#2a3f5f",
                        "gridcolor": "white",
                        "linecolor": "white",
                        "minorgridcolor": "white",
                        "startlinecolor": "#2a3f5f"
                    },
                    "baxis": {
                        "endlinecolor": "#2a3f5f",
                        "gridcolor": "white",
                        "linecolor": "white",
                        "minorgridcolor": "white",
                        "startlinecolor": "#2a3f5f"
                    },
                    "type": "carpet"
                }],
                "choropleth": [{
                    "colorbar": {
                        "outlinewidth": 0,
                        "ticks": ""
                    },
                    "type": "choropleth"
                }],
                "contourcarpet": [{
                    "colorbar": {
                        "outlinewidth": 0,
                        "ticks": ""
                    },
                    "type": "contourcarpet"
                }],
                "contour": [{
                    "colorbar": {
                        "outlinewidth": 0,
                        "ticks": ""
                    },
                    "colorscale": [
                        [0.0, "#0d0887"],
                        [0.1111111111111111, "#46039f"],
                        [0.2222222222222222, "#7201a8"],
                        [0.3333333333333333, "#9c179e"],
                        [0.4444444444444444, "#bd3786"],
                        [0.5555555555555556, "#d8576b"],
                        [0.6666666666666666, "#ed7953"],
                        [0.7777777777777778, "#fb9f3a"],
                        [0.8888888888888888, "#fdca26"],
                        [1.0, "#f0f921"]
                    ],
                    "type": "contour"
                }],
                "heatmapgl": [{
                    "colorbar": {
                        "outlinewidth": 0,
                        "ticks": ""
                    },
                    "colorscale": [
                        [0.0, "#0d0887"],
                        [0.1111111111111111, "#46039f"],
                        [0.2222222222222222, "#7201a8"],
                        [0.3333333333333333, "#9c179e"],
                        [0.4444444444444444, "#bd3786"],
                        [0.5555555555555556, "#d8576b"],
                        [0.6666666666666666, "#ed7953"],
                        [0.7777777777777778, "#fb9f3a"],
                        [0.8888888888888888, "#fdca26"],
                        [1.0, "#f0f921"]
                    ],
                    "type": "heatmapgl"
                }],
                "heatmap": [{
                    "colorbar": {
                        "outlinewidth": 0,
                        "ticks": ""
                    },
                    "colorscale": [
                        [0.0, "#0d0887"],
                        [0.1111111111111111, "#46039f"],
                        [0.2222222222222222, "#7201a8"],
                        [0.3333333333333333, "#9c179e"],
                        [0.4444444444444444, "#bd3786"],
                        [0.5555555555555556, "#d8576b"],
                        [0.6666666666666666, "#ed7953"],
                        [0.7777777777777778, "#fb9f3a"],
                        [0.8888888888888888, "#fdca26"],
                        [1.0, "#f0f921"]
                    ],
                    "type": "heatmap"
                }],
                "histogram2dcontour": [{
                    "colorbar": {
                        "outlinewidth": 0,
                        "ticks": ""
                    },
                    "colorscale": [
                        [0.0, "#0d0887"],
                        [0.1111111111111111, "#46039f"],
                        [0.2222222222222222, "#7201a8"],
                        [0.3333333333333333, "#9c179e"],
                        [0.4444444444444444, "#bd3786"],
                        [0.5555555555555556, "#d8576b"],
                        [0.6666666666666666, "#ed7953"],
                        [0.7777777777777778, "#fb9f3a"],
                        [0.8888888888888888, "#fdca26"],
                        [1.0, "#f0f921"]
                    ],
                    "type": "histogram2dcontour"
                }],
                "histogram2d": [{
                    "colorbar": {
                        "outlinewidth": 0,
                        "ticks": ""
                    },
                    "colorscale": [
                        [0.0, "#0d0887"],
                        [0.1111111111111111, "#46039f"],
                        [0.2222222222222222, "#7201a8"],
                        [0.3333333333333333, "#9c179e"],
                        [0.4444444444444444, "#bd3786"],
                        [0.5555555555555556, "#d8576b"],
                        [0.6666666666666666, "#ed7953"],
                        [0.7777777777777778, "#fb9f3a"],
                        [0.8888888888888888, "#fdca26"],
                        [1.0, "#f0f921"]
                    ],
                    "type": "histogram2d"
                }],
                "histogram": [{
                    "marker": {
                        "pattern": {
                            "fillmode": "overlay",
                            "size": 10,
                            "solidity": 0.2
                        }
                    },
                    "type": "histogram"
                }],
                "mesh3d": [{
                    "colorbar": {
                        "outlinewidth": 0,
                        "ticks": ""
                    },
                    "type": "mesh3d"
                }],
                "parcoords": [{
                    "line": {
                        "colorbar": {
                            "outlinewidth": 0,
                            "ticks": ""
                        }
                    },
                    "type": "parcoords"
                }],
                "pie": [{
                    "automargin": true,
                    "type": "pie"
                }],
                "scatter3d": [{
                    "line": {
                        "colorbar": {
                            "outlinewidth": 0,
                            "ticks": ""
                        }
                    },
                    "marker": {
                        "colorbar": {
                            "outlinewidth": 0,
                            "ticks": ""
                        }
                    },
                    "type": "scatter3d"
                }],
                "scattercarpet": [{
                    "marker": {
                        "colorbar": {
                            "outlinewidth": 0,
                            "ticks": ""
                        }
                    },
                    "type": "scattercarpet"
                }],
                "scattergeo": [{
                    "marker": {
                        "colorbar": {
                            "outlinewidth": 0,
                            "ticks": ""
                        }
                    },
                    "type": "scattergeo"
                }],
                "scattergl": [{
                    "marker": {
                        "colorbar": {
                            "outlinewidth": 0,
                            "ticks": ""
                        }
                    },
                    "type": "scattergl"
                }],
                "scattermapbox": [{
                    "marker": {
                        "colorbar": {
                            "outlinewidth": 0,
                            "ticks": ""
                        }
                    },
                    "type": "scattermapbox"
                }],
                "scatterpolargl": [{
                    "marker": {
                        "colorbar": {
                            "outlinewidth": 0,
                            "ticks": ""
                        }
                    },
                    "type": "scatterpolargl"
                }],
                "scatterpolar": [{
                    "marker": {
                        "colorbar": {
                            "outlinewidth": 0,
                            "ticks": ""
                        }
                    },
                    "type": "scatterpolar"
                }],
                "scatter": [{
                    "fillpattern": {
                        "fillmode": "overlay",
                        "size": 10,
                        "solidity": 0.2
                    },
                    "type": "scatter"
                }],
                "scatterternary": [{
                    "marker": {
                        "colorbar": {
                            "outlinewidth": 0,
                            "ticks": ""
                        }
                    },
                    "type": "scatterternary"
                }],
                "surface": [{
                    "colorbar": {
                        "outlinewidth": 0,
                        "ticks": ""
                    },
                    "colorscale": [
                        [0.0, "#0d0887"],
                        [0.1111111111111111, "#46039f"],
                        [0.2222222222222222, "#7201a8"],
                        [0.3333333333333333, "#9c179e"],
                        [0.4444444444444444, "#bd3786"],
                        [0.5555555555555556, "#d8576b"],
                        [0.6666666666666666, "#ed7953"],
                        [0.7777777777777778, "#fb9f3a"],
                        [0.8888888888888888, "#fdca26"],
                        [1.0, "#f0f921"]
                    ],
                    "type": "surface"
                }],
                "table": [{
                    "cells": {
                        "fill": {
                            "color": "#EBF0F8"
                        },
                        "line": {
                            "color": "white"
                        }
                    },
                    "header": {
                        "fill": {
                            "color": "#C8D4E3"
                        },
                        "line": {
                            "color": "white"
                        }
                    },
                    "type": "table"
                }]
            },
            "layout": {
                "annotationdefaults": {
                    "arrowcolor": "#2a3f5f",
                    "arrowhead": 0,
                    "arrowwidth": 1
                },
                "autotypenumbers": "strict",
                "coloraxis": {
                    "colorbar": {
                        "outlinewidth": 0,
                        "ticks": ""
                    }
                },
                "colorscale": {
                    "diverging": [
                        [0, "#8e0152"],
                        [0.1, "#c51b7d"],
                        [0.2, "#de77ae"],
                        [0.3, "#f1b6da"],
                        [0.4, "#fde0ef"],
                        [0.5, "#f7f7f7"],
                        [0.6, "#e6f5d0"],
                        [0.7, "#b8e186"],
                        [0.8, "#7fbc41"],
                        [0.9, "#4d9221"],
                        [1, "#276419"]
                    ],
                    "sequential": [
                        [0.0, "#0d0887"],
                        [0.1111111111111111, "#46039f"],
                        [0.2222222222222222, "#7201a8"],
                        [0.3333333333333333, "#9c179e"],
                        [0.4444444444444444, "#bd3786"],
                        [0.5555555555555556, "#d8576b"],
                        [0.6666666666666666, "#ed7953"],
                        [0.7777777777777778, "#fb9f3a"],
                        [0.8888888888888888, "#fdca26"],
                        [1.0, "#f0f921"]
                    ],
                    "sequentialminus": [
                        [0.0, "#0d0887"],
                        [0.1111111111111111, "#46039f"],
                        [0.2222222222222222, "#7201a8"],
                        [0.3333333333333333, "#9c179e"],
                        [0.4444444444444444, "#bd3786"],
                        [0.5555555555555556, "#d8576b"],
                        [0.6666666666666666, "#ed7953"],
                        [0.7777777777777778, "#fb9f3a"],
                        [0.8888888888888888, "#fdca26"],
                        [1.0, "#f0f921"]
                    ]
                },
                "colorway": ["#636efa", "#EF553B", "#00cc96", "#ab63fa", "#FFA15A", "#19d3f3", "#FF6692", "#B6E880", "#FF97FF", "#FECB52"],
                "font": {
                    "color": "#2a3f5f"
                },
                "geo": {
                    "bgcolor": "white",
                    "lakecolor": "white",
                    "landcolor": "#E5ECF6",
                    "showlakes": true,
                    "showland": true,
                    "subunitcolor": "white"
                },
                "hoverlabel": {
                    "align": "left"
                },
                "hovermode": "closest",
                "mapbox": {
                    "style": "light"
                },
                "paper_bgcolor": "white",
                "plot_bgcolor": "#E5ECF6",
                "polar": {
                    "angularaxis": {
                        "gridcolor": "white",
                        "linecolor": "white",
                        "ticks": ""
                    },
                    "bgcolor": "#E5ECF6",
                    "radialaxis": {
                        "gridcolor": "white",
                        "linecolor": "white",
                        "ticks": ""
                    }
                },
                "scene": {
                    "xaxis": {
                        "backgroundcolor": "#E5ECF6",
                        "gridcolor": "white",
                        "gridwidth": 2,
                        "linecolor": "white",
                        "showbackground": true,
                        "ticks": "",
                        "zerolinecolor": "white"
                    },
                    "yaxis": {
                        "backgroundcolor": "#E5ECF6",
                        "gridcolor": "white",
                        "gridwidth": 2,
                        "linecolor": "white",
                        "showbackground": true,
                        "ticks": "",
                        "zerolinecolor": "white"
                    },
                    "zaxis": {
                        "backgroundcolor": "#E5ECF6",
                        "gridcolor": "white",
                        "gridwidth": 2,
                        "linecolor": "white",
                        "showbackground": true,
                        "ticks": "",
                        "zerolinecolor": "white"
                    }
                },
                "shapedefaults": {
                    "line": {
                        "color": "#2a3f5f"
                    }
                },
                "ternary": {
                    "aaxis": {
                        "gridcolor": "white",
                        "linecolor": "white",
                        "ticks": ""
                    },
                    "baxis": {
                        "gridcolor": "white",
                        "linecolor": "white",
                        "ticks": ""
                    },
                    "bgcolor": "#E5ECF6",
                    "caxis": {
                        "gridcolor": "white",
                        "linecolor": "white",
                        "ticks": ""
                    }
                },
                "title": {
                    "x": 0.05
                },
                "xaxis": {
                    "automargin": true,
                    "gridcolor": "white",
                    "linecolor": "white",
                    "ticks": "",
                    "title": {
                        "standoff": 15
                    },
                    "zerolinecolor": "white",
                    "zerolinewidth": 2
                },
                "yaxis": {
                    "automargin": true,
                    "gridcolor": "white",
                    "linecolor": "white",
                    "ticks": "",
                    "title": {
                        "standoff": 15
                    },
                    "zerolinecolor": "white",
                    "zerolinewidth": 2
                }
            }
        },
        "title": {
            "text": "Seasonality of Phones and Videos",
            "x": 0.5
        },
        "updatemenus": [{
            "buttons": [{
                "args": [{
                    "visible": [true, true, false, false, false, false, false, false, false, false]
                }, {
                    "title": "Apple Seasonality"
                }],
                "label": "Apple",
                "method": "update"
            }, {
                "args": [{
                    "visible": [false, false, true, true, false, false, false, false, false, false]
                }, {
                    "title": "Samsung Seasonality"
                }],
                "label": "Samsung",
                "method": "update"
            }, {
                "args": [{
                    "visible": [false, false, false, false, true, true, false, false, false, false]
                }, {
                    "title": "Xiaomi Seasonality"
                }],
                "label": "Xiaomi",
                "method": "update"
            }, {
                "args": [{
                    "visible": [false, false, false, false, false, false, true, true, false, false]
                }, {
                    "title": "Huawei Seasonality"
                }],
                "label": "Huawei",
                "method": "update"
            }, {
                "args": [{
                    "visible": [false, false, false, false, false, false, false, false, true, true]
                }, {
                    "title": "Oppo Seasonality"
                }],
                "label": "Oppo",
                "method": "update"
            }],
            "direction": "down",
            "pad": {
                "r": 10,
                "t": 10
            },
            "showactive": true,
            "x": 0.1,
            "xanchor": "left",
            "y": 1.1,
            "yanchor": "top"
        }],
        "xaxis": {
            "title": {
                "text": "Seasonality Component"
            }
        },
        "yaxis": {
            "title": {
                "text": "Days of the Year"
            }
        }
    }, {
        "responsive": true
    })
};


// Number of videos for each brand

window.PLOTLYENV = window.PLOTLYENV || {};
if (document.getElementById("videos_barchart")) {
    Plotly.newPlot(
        "videos_barchart",
        [{ name: "Numeber videos", x: ["Samsung", "Apple", "Huawei", "Xiaomi", "Oppo"], y: [91972, 60273, 43019, 80976, 7422], type: "bar" }],
        {
            height: 500,
            template: {
                data: {
                    barpolar: [{ marker: { line: { color: "#E5ECF6", width: 0.5 }, pattern: { fillmode: "overlay", size: 10, solidity: 0.2 } }, type: "barpolar" }],
                    bar: [{ error_x: { color: "#2a3f5f" }, error_y: { color: "#2a3f5f" }, marker: { line: { color: "#E5ECF6", width: 0.5 }, pattern: { fillmode: "overlay", size: 10, solidity: 0.2 } }, type: "bar" }],
                    carpet: [
                        {
                            aaxis: { endlinecolor: "#2a3f5f", gridcolor: "white", linecolor: "white", minorgridcolor: "white", startlinecolor: "#2a3f5f" },
                            baxis: { endlinecolor: "#2a3f5f", gridcolor: "white", linecolor: "white", minorgridcolor: "white", startlinecolor: "#2a3f5f" },
                            type: "carpet",
                        },
                    ],
                    choropleth: [{ colorbar: { outlinewidth: 0, ticks: "" }, type: "choropleth" }],
                    contourcarpet: [{ colorbar: { outlinewidth: 0, ticks: "" }, type: "contourcarpet" }],
                    contour: [
                        {
                            colorbar: { outlinewidth: 0, ticks: "" },
                            colorscale: [
                                [0.0, "#0d0887"],
                                [0.1111111111111111, "#46039f"],
                                [0.2222222222222222, "#7201a8"],
                                [0.3333333333333333, "#9c179e"],
                                [0.4444444444444444, "#bd3786"],
                                [0.5555555555555556, "#d8576b"],
                                [0.6666666666666666, "#ed7953"],
                                [0.7777777777777778, "#fb9f3a"],
                                [0.8888888888888888, "#fdca26"],
                                [1.0, "#f0f921"],
                            ],
                            type: "contour",
                        },
                    ],
                    heatmapgl: [
                        {
                            colorbar: { outlinewidth: 0, ticks: "" },
                            colorscale: [
                                [0.0, "#0d0887"],
                                [0.1111111111111111, "#46039f"],
                                [0.2222222222222222, "#7201a8"],
                                [0.3333333333333333, "#9c179e"],
                                [0.4444444444444444, "#bd3786"],
                                [0.5555555555555556, "#d8576b"],
                                [0.6666666666666666, "#ed7953"],
                                [0.7777777777777778, "#fb9f3a"],
                                [0.8888888888888888, "#fdca26"],
                                [1.0, "#f0f921"],
                            ],
                            type: "heatmapgl",
                        },
                    ],
                    heatmap: [
                        {
                            colorbar: { outlinewidth: 0, ticks: "" },
                            colorscale: [
                                [0.0, "#0d0887"],
                                [0.1111111111111111, "#46039f"],
                                [0.2222222222222222, "#7201a8"],
                                [0.3333333333333333, "#9c179e"],
                                [0.4444444444444444, "#bd3786"],
                                [0.5555555555555556, "#d8576b"],
                                [0.6666666666666666, "#ed7953"],
                                [0.7777777777777778, "#fb9f3a"],
                                [0.8888888888888888, "#fdca26"],
                                [1.0, "#f0f921"],
                            ],
                            type: "heatmap",
                        },
                    ],
                    histogram2dcontour: [
                        {
                            colorbar: { outlinewidth: 0, ticks: "" },
                            colorscale: [
                                [0.0, "#0d0887"],
                                [0.1111111111111111, "#46039f"],
                                [0.2222222222222222, "#7201a8"],
                                [0.3333333333333333, "#9c179e"],
                                [0.4444444444444444, "#bd3786"],
                                [0.5555555555555556, "#d8576b"],
                                [0.6666666666666666, "#ed7953"],
                                [0.7777777777777778, "#fb9f3a"],
                                [0.8888888888888888, "#fdca26"],
                                [1.0, "#f0f921"],
                            ],
                            type: "histogram2dcontour",
                        },
                    ],
                    histogram2d: [
                        {
                            colorbar: { outlinewidth: 0, ticks: "" },
                            colorscale: [
                                [0.0, "#0d0887"],
                                [0.1111111111111111, "#46039f"],
                                [0.2222222222222222, "#7201a8"],
                                [0.3333333333333333, "#9c179e"],
                                [0.4444444444444444, "#bd3786"],
                                [0.5555555555555556, "#d8576b"],
                                [0.6666666666666666, "#ed7953"],
                                [0.7777777777777778, "#fb9f3a"],
                                [0.8888888888888888, "#fdca26"],
                                [1.0, "#f0f921"],
                            ],
                            type: "histogram2d",
                        },
                    ],
                    histogram: [{ marker: { pattern: { fillmode: "overlay", size: 10, solidity: 0.2 } }, type: "histogram" }],
                    mesh3d: [{ colorbar: { outlinewidth: 0, ticks: "" }, type: "mesh3d" }],
                    parcoords: [{ line: { colorbar: { outlinewidth: 0, ticks: "" } }, type: "parcoords" }],
                    pie: [{ automargin: true, type: "pie" }],
                    scatter3d: [{ line: { colorbar: { outlinewidth: 0, ticks: "" } }, marker: { colorbar: { outlinewidth: 0, ticks: "" } }, type: "scatter3d" }],
                    scattercarpet: [{ marker: { colorbar: { outlinewidth: 0, ticks: "" } }, type: "scattercarpet" }],
                    scattergeo: [{ marker: { colorbar: { outlinewidth: 0, ticks: "" } }, type: "scattergeo" }],
                    scattergl: [{ marker: { colorbar: { outlinewidth: 0, ticks: "" } }, type: "scattergl" }],
                    scattermapbox: [{ marker: { colorbar: { outlinewidth: 0, ticks: "" } }, type: "scattermapbox" }],
                    scatterpolargl: [{ marker: { colorbar: { outlinewidth: 0, ticks: "" } }, type: "scatterpolargl" }],
                    scatterpolar: [{ marker: { colorbar: { outlinewidth: 0, ticks: "" } }, type: "scatterpolar" }],
                    scatter: [{ marker: { colorbar: { outlinewidth: 0, ticks: "" } }, type: "scatter" }],
                    scatterternary: [{ marker: { colorbar: { outlinewidth: 0, ticks: "" } }, type: "scatterternary" }],
                    surface: [
                        {
                            colorbar: { outlinewidth: 0, ticks: "" },
                            colorscale: [
                                [0.0, "#0d0887"],
                                [0.1111111111111111, "#46039f"],
                                [0.2222222222222222, "#7201a8"],
                                [0.3333333333333333, "#9c179e"],
                                [0.4444444444444444, "#bd3786"],
                                [0.5555555555555556, "#d8576b"],
                                [0.6666666666666666, "#ed7953"],
                                [0.7777777777777778, "#fb9f3a"],
                                [0.8888888888888888, "#fdca26"],
                                [1.0, "#f0f921"],
                            ],
                            type: "surface",
                        },
                    ],
                    table: [{ cells: { fill: { color: "#EBF0F8" }, line: { color: "white" } }, header: { fill: { color: "#C8D4E3" }, line: { color: "white" } }, type: "table" }],
                },
                layout: {
                    annotationdefaults: { arrowcolor: "#2a3f5f", arrowhead: 0, arrowwidth: 1 },
                    autotypenumbers: "strict",
                    coloraxis: { colorbar: { outlinewidth: 0, ticks: "" } },
                    colorscale: {
                        diverging: [
                            [0, "#8e0152"],
                            [0.1, "#c51b7d"],
                            [0.2, "#de77ae"],
                            [0.3, "#f1b6da"],
                            [0.4, "#fde0ef"],
                            [0.5, "#f7f7f7"],
                            [0.6, "#e6f5d0"],
                            [0.7, "#b8e186"],
                            [0.8, "#7fbc41"],
                            [0.9, "#4d9221"],
                            [1, "#276419"],
                        ],
                        sequential: [
                            [0.0, "#0d0887"],
                            [0.1111111111111111, "#46039f"],
                            [0.2222222222222222, "#7201a8"],
                            [0.3333333333333333, "#9c179e"],
                            [0.4444444444444444, "#bd3786"],
                            [0.5555555555555556, "#d8576b"],
                            [0.6666666666666666, "#ed7953"],
                            [0.7777777777777778, "#fb9f3a"],
                            [0.8888888888888888, "#fdca26"],
                            [1.0, "#f0f921"],
                        ],
                        sequentialminus: [
                            [0.0, "#0d0887"],
                            [0.1111111111111111, "#46039f"],
                            [0.2222222222222222, "#7201a8"],
                            [0.3333333333333333, "#9c179e"],
                            [0.4444444444444444, "#bd3786"],
                            [0.5555555555555556, "#d8576b"],
                            [0.6666666666666666, "#ed7953"],
                            [0.7777777777777778, "#fb9f3a"],
                            [0.8888888888888888, "#fdca26"],
                            [1.0, "#f0f921"],
                        ],
                    },
                    colorway: ["#636efa", "#EF553B", "#00cc96", "#ab63fa", "#FFA15A", "#19d3f3", "#FF6692", "#B6E880", "#FF97FF", "#FECB52"],
                    font: { color: "#2a3f5f" },
                    geo: { bgcolor: "white", lakecolor: "white", landcolor: "#E5ECF6", showlakes: true, showland: true, subunitcolor: "white" },
                    hoverlabel: { align: "left" },
                    hovermode: "closest",
                    mapbox: { style: "light" },
                    paper_bgcolor: "white",
                    plot_bgcolor: "#E5ECF6",
                    polar: { angularaxis: { gridcolor: "white", linecolor: "white", ticks: "" }, bgcolor: "#E5ECF6", radialaxis: { gridcolor: "white", linecolor: "white", ticks: "" } },
                    scene: {
                        xaxis: { backgroundcolor: "#E5ECF6", gridcolor: "white", gridwidth: 2, linecolor: "white", showbackground: true, ticks: "", zerolinecolor: "white" },
                        yaxis: { backgroundcolor: "#E5ECF6", gridcolor: "white", gridwidth: 2, linecolor: "white", showbackground: true, ticks: "", zerolinecolor: "white" },
                        zaxis: { backgroundcolor: "#E5ECF6", gridcolor: "white", gridwidth: 2, linecolor: "white", showbackground: true, ticks: "", zerolinecolor: "white" },
                    },
                    shapedefaults: { line: { color: "#2a3f5f" } },
                    ternary: {
                        aaxis: { gridcolor: "white", linecolor: "white", ticks: "" },
                        baxis: { gridcolor: "white", linecolor: "white", ticks: "" },
                        bgcolor: "#E5ECF6",
                        caxis: { gridcolor: "white", linecolor: "white", ticks: "" },
                    },
                    title: { x: 0.05 },
                    xaxis: { automargin: true, gridcolor: "white", linecolor: "white", ticks: "", title: { standoff: 15 }, zerolinecolor: "white", zerolinewidth: 2 },
                    yaxis: { automargin: true, gridcolor: "white", linecolor: "white", ticks: "", title: { standoff: 15 }, zerolinecolor: "white", zerolinewidth: 2 },
                },
            },
            title: { text: "Numbers videos for Selected Brands", x: 0.5 },
            width: 800,
            xaxis: { title: { text: "Brand" } },
            yaxis: { title: { text: "Numbers videos" } },
        },
        { responsive: true }
    );
}

// Number of videos and views of selected brands

window.PLOTLYENV = window.PLOTLYENV || {};
if (document.getElementById("views_video_per_brand")) {
    Plotly.newPlot(
        "views_video_per_brand",
        [
            { domain: { x: [0.0, 0.45], y: [0.0, 1.0] }, labels: ["Samsung", "Apple", "Huawei", "Xiaomi", "Oppo"], name: "No. videos", scalegroup: "one", values: [91972, 60273, 43019, 80976, 7422], type: "pie" },
            { domain: { x: [0.55, 1.0], y: [0.0, 1.0] }, labels: ["Samsung", "Apple", "Huawei", "Xiaomi", "Oppo"], name: "No. views", values: [9208750492, 9770581193, 2873558730, 6417211816, 2193355558], type: "pie" },
        ],
        {
            annotations: [
                { font: { size: 16 }, showarrow: false, text: "Share of Videos", x: 0.225, xanchor: "center", xref: "paper", y: 1.0, yanchor: "bottom", yref: "paper" },
                { font: { size: 16 }, showarrow: false, text: "Share of Views", x: 0.775, xanchor: "center", xref: "paper", y: 1.0, yanchor: "bottom", yref: "paper" },
            ],
            height: 400,
            template: {
                data: {
                    barpolar: [{ marker: { line: { color: "#E5ECF6", width: 0.5 }, pattern: { fillmode: "overlay", size: 10, solidity: 0.2 } }, type: "barpolar" }],
                    bar: [{ error_x: { color: "#2a3f5f" }, error_y: { color: "#2a3f5f" }, marker: { line: { color: "#E5ECF6", width: 0.5 }, pattern: { fillmode: "overlay", size: 10, solidity: 0.2 } }, type: "bar" }],
                    carpet: [
                        {
                            aaxis: { endlinecolor: "#2a3f5f", gridcolor: "white", linecolor: "white", minorgridcolor: "white", startlinecolor: "#2a3f5f" },
                            baxis: { endlinecolor: "#2a3f5f", gridcolor: "white", linecolor: "white", minorgridcolor: "white", startlinecolor: "#2a3f5f" },
                            type: "carpet",
                        },
                    ],
                    choropleth: [{ colorbar: { outlinewidth: 0, ticks: "" }, type: "choropleth" }],
                    contourcarpet: [{ colorbar: { outlinewidth: 0, ticks: "" }, type: "contourcarpet" }],
                    contour: [
                        {
                            colorbar: { outlinewidth: 0, ticks: "" },
                            colorscale: [
                                [0.0, "#0d0887"],
                                [0.1111111111111111, "#46039f"],
                                [0.2222222222222222, "#7201a8"],
                                [0.3333333333333333, "#9c179e"],
                                [0.4444444444444444, "#bd3786"],
                                [0.5555555555555556, "#d8576b"],
                                [0.6666666666666666, "#ed7953"],
                                [0.7777777777777778, "#fb9f3a"],
                                [0.8888888888888888, "#fdca26"],
                                [1.0, "#f0f921"],
                            ],
                            type: "contour",
                        },
                    ],
                    heatmapgl: [
                        {
                            colorbar: { outlinewidth: 0, ticks: "" },
                            colorscale: [
                                [0.0, "#0d0887"],
                                [0.1111111111111111, "#46039f"],
                                [0.2222222222222222, "#7201a8"],
                                [0.3333333333333333, "#9c179e"],
                                [0.4444444444444444, "#bd3786"],
                                [0.5555555555555556, "#d8576b"],
                                [0.6666666666666666, "#ed7953"],
                                [0.7777777777777778, "#fb9f3a"],
                                [0.8888888888888888, "#fdca26"],
                                [1.0, "#f0f921"],
                            ],
                            type: "heatmapgl",
                        },
                    ],
                    heatmap: [
                        {
                            colorbar: { outlinewidth: 0, ticks: "" },
                            colorscale: [
                                [0.0, "#0d0887"],
                                [0.1111111111111111, "#46039f"],
                                [0.2222222222222222, "#7201a8"],
                                [0.3333333333333333, "#9c179e"],
                                [0.4444444444444444, "#bd3786"],
                                [0.5555555555555556, "#d8576b"],
                                [0.6666666666666666, "#ed7953"],
                                [0.7777777777777778, "#fb9f3a"],
                                [0.8888888888888888, "#fdca26"],
                                [1.0, "#f0f921"],
                            ],
                            type: "heatmap",
                        },
                    ],
                    histogram2dcontour: [
                        {
                            colorbar: { outlinewidth: 0, ticks: "" },
                            colorscale: [
                                [0.0, "#0d0887"],
                                [0.1111111111111111, "#46039f"],
                                [0.2222222222222222, "#7201a8"],
                                [0.3333333333333333, "#9c179e"],
                                [0.4444444444444444, "#bd3786"],
                                [0.5555555555555556, "#d8576b"],
                                [0.6666666666666666, "#ed7953"],
                                [0.7777777777777778, "#fb9f3a"],
                                [0.8888888888888888, "#fdca26"],
                                [1.0, "#f0f921"],
                            ],
                            type: "histogram2dcontour",
                        },
                    ],
                    histogram2d: [
                        {
                            colorbar: { outlinewidth: 0, ticks: "" },
                            colorscale: [
                                [0.0, "#0d0887"],
                                [0.1111111111111111, "#46039f"],
                                [0.2222222222222222, "#7201a8"],
                                [0.3333333333333333, "#9c179e"],
                                [0.4444444444444444, "#bd3786"],
                                [0.5555555555555556, "#d8576b"],
                                [0.6666666666666666, "#ed7953"],
                                [0.7777777777777778, "#fb9f3a"],
                                [0.8888888888888888, "#fdca26"],
                                [1.0, "#f0f921"],
                            ],
                            type: "histogram2d",
                        },
                    ],
                    histogram: [{ marker: { pattern: { fillmode: "overlay", size: 10, solidity: 0.2 } }, type: "histogram" }],
                    mesh3d: [{ colorbar: { outlinewidth: 0, ticks: "" }, type: "mesh3d" }],
                    parcoords: [{ line: { colorbar: { outlinewidth: 0, ticks: "" } }, type: "parcoords" }],
                    pie: [{ automargin: true, type: "pie" }],
                    scatter3d: [{ line: { colorbar: { outlinewidth: 0, ticks: "" } }, marker: { colorbar: { outlinewidth: 0, ticks: "" } }, type: "scatter3d" }],
                    scattercarpet: [{ marker: { colorbar: { outlinewidth: 0, ticks: "" } }, type: "scattercarpet" }],
                    scattergeo: [{ marker: { colorbar: { outlinewidth: 0, ticks: "" } }, type: "scattergeo" }],
                    scattergl: [{ marker: { colorbar: { outlinewidth: 0, ticks: "" } }, type: "scattergl" }],
                    scattermapbox: [{ marker: { colorbar: { outlinewidth: 0, ticks: "" } }, type: "scattermapbox" }],
                    scatterpolargl: [{ marker: { colorbar: { outlinewidth: 0, ticks: "" } }, type: "scatterpolargl" }],
                    scatterpolar: [{ marker: { colorbar: { outlinewidth: 0, ticks: "" } }, type: "scatterpolar" }],
                    scatter: [{ marker: { colorbar: { outlinewidth: 0, ticks: "" } }, type: "scatter" }],
                    scatterternary: [{ marker: { colorbar: { outlinewidth: 0, ticks: "" } }, type: "scatterternary" }],
                    surface: [
                        {
                            colorbar: { outlinewidth: 0, ticks: "" },
                            colorscale: [
                                [0.0, "#0d0887"],
                                [0.1111111111111111, "#46039f"],
                                [0.2222222222222222, "#7201a8"],
                                [0.3333333333333333, "#9c179e"],
                                [0.4444444444444444, "#bd3786"],
                                [0.5555555555555556, "#d8576b"],
                                [0.6666666666666666, "#ed7953"],
                                [0.7777777777777778, "#fb9f3a"],
                                [0.8888888888888888, "#fdca26"],
                                [1.0, "#f0f921"],
                            ],
                            type: "surface",
                        },
                    ],
                    table: [{ cells: { fill: { color: "#EBF0F8" }, line: { color: "white" } }, header: { fill: { color: "#C8D4E3" }, line: { color: "white" } }, type: "table" }],
                },
                layout: {
                    annotationdefaults: { arrowcolor: "#2a3f5f", arrowhead: 0, arrowwidth: 1 },
                    autotypenumbers: "strict",
                    coloraxis: { colorbar: { outlinewidth: 0, ticks: "" } },
                    colorscale: {
                        diverging: [
                            [0, "#8e0152"],
                            [0.1, "#c51b7d"],
                            [0.2, "#de77ae"],
                            [0.3, "#f1b6da"],
                            [0.4, "#fde0ef"],
                            [0.5, "#f7f7f7"],
                            [0.6, "#e6f5d0"],
                            [0.7, "#b8e186"],
                            [0.8, "#7fbc41"],
                            [0.9, "#4d9221"],
                            [1, "#276419"],
                        ],
                        sequential: [
                            [0.0, "#0d0887"],
                            [0.1111111111111111, "#46039f"],
                            [0.2222222222222222, "#7201a8"],
                            [0.3333333333333333, "#9c179e"],
                            [0.4444444444444444, "#bd3786"],
                            [0.5555555555555556, "#d8576b"],
                            [0.6666666666666666, "#ed7953"],
                            [0.7777777777777778, "#fb9f3a"],
                            [0.8888888888888888, "#fdca26"],
                            [1.0, "#f0f921"],
                        ],
                        sequentialminus: [
                            [0.0, "#0d0887"],
                            [0.1111111111111111, "#46039f"],
                            [0.2222222222222222, "#7201a8"],
                            [0.3333333333333333, "#9c179e"],
                            [0.4444444444444444, "#bd3786"],
                            [0.5555555555555556, "#d8576b"],
                            [0.6666666666666666, "#ed7953"],
                            [0.7777777777777778, "#fb9f3a"],
                            [0.8888888888888888, "#fdca26"],
                            [1.0, "#f0f921"],
                        ],
                    },
                    colorway: ["#636efa", "#EF553B", "#00cc96", "#ab63fa", "#FFA15A", "#19d3f3", "#FF6692", "#B6E880", "#FF97FF", "#FECB52"],
                    font: { color: "#2a3f5f" },
                    geo: { bgcolor: "white", lakecolor: "white", landcolor: "#E5ECF6", showlakes: true, showland: true, subunitcolor: "white" },
                    hoverlabel: { align: "left" },
                    hovermode: "closest",
                    mapbox: { style: "light" },
                    paper_bgcolor: "white",
                    plot_bgcolor: "#E5ECF6",
                    polar: { angularaxis: { gridcolor: "white", linecolor: "white", ticks: "" }, bgcolor: "#E5ECF6", radialaxis: { gridcolor: "white", linecolor: "white", ticks: "" } },
                    scene: {
                        xaxis: { backgroundcolor: "#E5ECF6", gridcolor: "white", gridwidth: 2, linecolor: "white", showbackground: true, ticks: "", zerolinecolor: "white" },
                        yaxis: { backgroundcolor: "#E5ECF6", gridcolor: "white", gridwidth: 2, linecolor: "white", showbackground: true, ticks: "", zerolinecolor: "white" },
                        zaxis: { backgroundcolor: "#E5ECF6", gridcolor: "white", gridwidth: 2, linecolor: "white", showbackground: true, ticks: "", zerolinecolor: "white" },
                    },
                    shapedefaults: { line: { color: "#2a3f5f" } },
                    ternary: {
                        aaxis: { gridcolor: "white", linecolor: "white", ticks: "" },
                        baxis: { gridcolor: "white", linecolor: "white", ticks: "" },
                        bgcolor: "#E5ECF6",
                        caxis: { gridcolor: "white", linecolor: "white", ticks: "" },
                    },
                    title: { x: 0.05 },
                    xaxis: { automargin: true, gridcolor: "white", linecolor: "white", ticks: "", title: { standoff: 15 }, zerolinecolor: "white", zerolinewidth: 2 },
                    yaxis: { automargin: true, gridcolor: "white", linecolor: "white", ticks: "", title: { standoff: 15 }, zerolinecolor: "white", zerolinewidth: 2 },
                },
            },
            width: 1100,
            xaxis: { fixedrange: true },
            yaxis: { fixedrange: true },
        },
        { responsive: true }
    );
}


// Number of videos and views of selected brands per model

window.PLOTLYENV = window.PLOTLYENV || {};
if (document.getElementById("views_video_per_model")) {
    Plotly.newPlot(
        "views_video_per_model",
        [
            { domain: { x: [0.0, 0.45], y: [0.0, 1.0] }, labels: ["Samsung", "Apple", "Huawei", "Xiaomi", "Oppo"], name: "videos", scalegroup: "one", values: [92, 2739, 172, 756, 67], type: "pie" },
            { domain: { x: [0.55, 1.0], y: [0.0, 1.0] }, labels: ["Samsung", "Apple", "Huawei", "Xiaomi", "Oppo"], name: "views", values: [9255025, 444117326, 11540396, 59973942, 19939595], type: "pie" },
        ],
        {
            annotations: [
                { font: { size: 16 }, showarrow: false, text: "Share of Videos per model", x: 0.225, xanchor: "center", xref: "paper", y: 1.0, yanchor: "bottom", yref: "paper" },
                { font: { size: 16 }, showarrow: false, text: "Share of Views per model", x: 0.775, xanchor: "center", xref: "paper", y: 1.0, yanchor: "bottom", yref: "paper" },
            ],
            height: 400,
            template: {
                data: {
                    barpolar: [{ marker: { line: { color: "#E5ECF6", width: 0.5 }, pattern: { fillmode: "overlay", size: 10, solidity: 0.2 } }, type: "barpolar" }],
                    bar: [{ error_x: { color: "#2a3f5f" }, error_y: { color: "#2a3f5f" }, marker: { line: { color: "#E5ECF6", width: 0.5 }, pattern: { fillmode: "overlay", size: 10, solidity: 0.2 } }, type: "bar" }],
                    carpet: [
                        {
                            aaxis: { endlinecolor: "#2a3f5f", gridcolor: "white", linecolor: "white", minorgridcolor: "white", startlinecolor: "#2a3f5f" },
                            baxis: { endlinecolor: "#2a3f5f", gridcolor: "white", linecolor: "white", minorgridcolor: "white", startlinecolor: "#2a3f5f" },
                            type: "carpet",
                        },
                    ],
                    choropleth: [{ colorbar: { outlinewidth: 0, ticks: "" }, type: "choropleth" }],
                    contourcarpet: [{ colorbar: { outlinewidth: 0, ticks: "" }, type: "contourcarpet" }],
                    contour: [
                        {
                            colorbar: { outlinewidth: 0, ticks: "" },
                            colorscale: [
                                [0.0, "#0d0887"],
                                [0.1111111111111111, "#46039f"],
                                [0.2222222222222222, "#7201a8"],
                                [0.3333333333333333, "#9c179e"],
                                [0.4444444444444444, "#bd3786"],
                                [0.5555555555555556, "#d8576b"],
                                [0.6666666666666666, "#ed7953"],
                                [0.7777777777777778, "#fb9f3a"],
                                [0.8888888888888888, "#fdca26"],
                                [1.0, "#f0f921"],
                            ],
                            type: "contour",
                        },
                    ],
                    heatmapgl: [
                        {
                            colorbar: { outlinewidth: 0, ticks: "" },
                            colorscale: [
                                [0.0, "#0d0887"],
                                [0.1111111111111111, "#46039f"],
                                [0.2222222222222222, "#7201a8"],
                                [0.3333333333333333, "#9c179e"],
                                [0.4444444444444444, "#bd3786"],
                                [0.5555555555555556, "#d8576b"],
                                [0.6666666666666666, "#ed7953"],
                                [0.7777777777777778, "#fb9f3a"],
                                [0.8888888888888888, "#fdca26"],
                                [1.0, "#f0f921"],
                            ],
                            type: "heatmapgl",
                        },
                    ],
                    heatmap: [
                        {
                            colorbar: { outlinewidth: 0, ticks: "" },
                            colorscale: [
                                [0.0, "#0d0887"],
                                [0.1111111111111111, "#46039f"],
                                [0.2222222222222222, "#7201a8"],
                                [0.3333333333333333, "#9c179e"],
                                [0.4444444444444444, "#bd3786"],
                                [0.5555555555555556, "#d8576b"],
                                [0.6666666666666666, "#ed7953"],
                                [0.7777777777777778, "#fb9f3a"],
                                [0.8888888888888888, "#fdca26"],
                                [1.0, "#f0f921"],
                            ],
                            type: "heatmap",
                        },
                    ],
                    histogram2dcontour: [
                        {
                            colorbar: { outlinewidth: 0, ticks: "" },
                            colorscale: [
                                [0.0, "#0d0887"],
                                [0.1111111111111111, "#46039f"],
                                [0.2222222222222222, "#7201a8"],
                                [0.3333333333333333, "#9c179e"],
                                [0.4444444444444444, "#bd3786"],
                                [0.5555555555555556, "#d8576b"],
                                [0.6666666666666666, "#ed7953"],
                                [0.7777777777777778, "#fb9f3a"],
                                [0.8888888888888888, "#fdca26"],
                                [1.0, "#f0f921"],
                            ],
                            type: "histogram2dcontour",
                        },
                    ],
                    histogram2d: [
                        {
                            colorbar: { outlinewidth: 0, ticks: "" },
                            colorscale: [
                                [0.0, "#0d0887"],
                                [0.1111111111111111, "#46039f"],
                                [0.2222222222222222, "#7201a8"],
                                [0.3333333333333333, "#9c179e"],
                                [0.4444444444444444, "#bd3786"],
                                [0.5555555555555556, "#d8576b"],
                                [0.6666666666666666, "#ed7953"],
                                [0.7777777777777778, "#fb9f3a"],
                                [0.8888888888888888, "#fdca26"],
                                [1.0, "#f0f921"],
                            ],
                            type: "histogram2d",
                        },
                    ],
                    histogram: [{ marker: { pattern: { fillmode: "overlay", size: 10, solidity: 0.2 } }, type: "histogram" }],
                    mesh3d: [{ colorbar: { outlinewidth: 0, ticks: "" }, type: "mesh3d" }],
                    parcoords: [{ line: { colorbar: { outlinewidth: 0, ticks: "" } }, type: "parcoords" }],
                    pie: [{ automargin: true, type: "pie" }],
                    scatter3d: [{ line: { colorbar: { outlinewidth: 0, ticks: "" } }, marker: { colorbar: { outlinewidth: 0, ticks: "" } }, type: "scatter3d" }],
                    scattercarpet: [{ marker: { colorbar: { outlinewidth: 0, ticks: "" } }, type: "scattercarpet" }],
                    scattergeo: [{ marker: { colorbar: { outlinewidth: 0, ticks: "" } }, type: "scattergeo" }],
                    scattergl: [{ marker: { colorbar: { outlinewidth: 0, ticks: "" } }, type: "scattergl" }],
                    scattermapbox: [{ marker: { colorbar: { outlinewidth: 0, ticks: "" } }, type: "scattermapbox" }],
                    scatterpolargl: [{ marker: { colorbar: { outlinewidth: 0, ticks: "" } }, type: "scatterpolargl" }],
                    scatterpolar: [{ marker: { colorbar: { outlinewidth: 0, ticks: "" } }, type: "scatterpolar" }],
                    scatter: [{ marker: { colorbar: { outlinewidth: 0, ticks: "" } }, type: "scatter" }],
                    scatterternary: [{ marker: { colorbar: { outlinewidth: 0, ticks: "" } }, type: "scatterternary" }],
                    surface: [
                        {
                            colorbar: { outlinewidth: 0, ticks: "" },
                            colorscale: [
                                [0.0, "#0d0887"],
                                [0.1111111111111111, "#46039f"],
                                [0.2222222222222222, "#7201a8"],
                                [0.3333333333333333, "#9c179e"],
                                [0.4444444444444444, "#bd3786"],
                                [0.5555555555555556, "#d8576b"],
                                [0.6666666666666666, "#ed7953"],
                                [0.7777777777777778, "#fb9f3a"],
                                [0.8888888888888888, "#fdca26"],
                                [1.0, "#f0f921"],
                            ],
                            type: "surface",
                        },
                    ],
                    table: [{ cells: { fill: { color: "#EBF0F8" }, line: { color: "white" } }, header: { fill: { color: "#C8D4E3" }, line: { color: "white" } }, type: "table" }],
                },
                layout: {
                    annotationdefaults: { arrowcolor: "#2a3f5f", arrowhead: 0, arrowwidth: 1 },
                    autotypenumbers: "strict",
                    coloraxis: { colorbar: { outlinewidth: 0, ticks: "" } },
                    colorscale: {
                        diverging: [
                            [0, "#8e0152"],
                            [0.1, "#c51b7d"],
                            [0.2, "#de77ae"],
                            [0.3, "#f1b6da"],
                            [0.4, "#fde0ef"],
                            [0.5, "#f7f7f7"],
                            [0.6, "#e6f5d0"],
                            [0.7, "#b8e186"],
                            [0.8, "#7fbc41"],
                            [0.9, "#4d9221"],
                            [1, "#276419"],
                        ],
                        sequential: [
                            [0.0, "#0d0887"],
                            [0.1111111111111111, "#46039f"],
                            [0.2222222222222222, "#7201a8"],
                            [0.3333333333333333, "#9c179e"],
                            [0.4444444444444444, "#bd3786"],
                            [0.5555555555555556, "#d8576b"],
                            [0.6666666666666666, "#ed7953"],
                            [0.7777777777777778, "#fb9f3a"],
                            [0.8888888888888888, "#fdca26"],
                            [1.0, "#f0f921"],
                        ],
                        sequentialminus: [
                            [0.0, "#0d0887"],
                            [0.1111111111111111, "#46039f"],
                            [0.2222222222222222, "#7201a8"],
                            [0.3333333333333333, "#9c179e"],
                            [0.4444444444444444, "#bd3786"],
                            [0.5555555555555556, "#d8576b"],
                            [0.6666666666666666, "#ed7953"],
                            [0.7777777777777778, "#fb9f3a"],
                            [0.8888888888888888, "#fdca26"],
                            [1.0, "#f0f921"],
                        ],
                    },
                    colorway: ["#636efa", "#EF553B", "#00cc96", "#ab63fa", "#FFA15A", "#19d3f3", "#FF6692", "#B6E880", "#FF97FF", "#FECB52"],
                    font: { color: "#2a3f5f" },
                    geo: { bgcolor: "white", lakecolor: "white", landcolor: "#E5ECF6", showlakes: true, showland: true, subunitcolor: "white" },
                    hoverlabel: { align: "left" },
                    hovermode: "closest",
                    mapbox: { style: "light" },
                    paper_bgcolor: "white",
                    plot_bgcolor: "#E5ECF6",
                    polar: { angularaxis: { gridcolor: "white", linecolor: "white", ticks: "" }, bgcolor: "#E5ECF6", radialaxis: { gridcolor: "white", linecolor: "white", ticks: "" } },
                    scene: {
                        xaxis: { backgroundcolor: "#E5ECF6", gridcolor: "white", gridwidth: 2, linecolor: "white", showbackground: true, ticks: "", zerolinecolor: "white" },
                        yaxis: { backgroundcolor: "#E5ECF6", gridcolor: "white", gridwidth: 2, linecolor: "white", showbackground: true, ticks: "", zerolinecolor: "white" },
                        zaxis: { backgroundcolor: "#E5ECF6", gridcolor: "white", gridwidth: 2, linecolor: "white", showbackground: true, ticks: "", zerolinecolor: "white" },
                    },
                    shapedefaults: { line: { color: "#2a3f5f" } },
                    ternary: {
                        aaxis: { gridcolor: "white", linecolor: "white", ticks: "" },
                        baxis: { gridcolor: "white", linecolor: "white", ticks: "" },
                        bgcolor: "#E5ECF6",
                        caxis: { gridcolor: "white", linecolor: "white", ticks: "" },
                    },
                    title: { x: 0.05 },
                    xaxis: { automargin: true, gridcolor: "white", linecolor: "white", ticks: "", title: { standoff: 15 }, zerolinecolor: "white", zerolinewidth: 2 },
                    yaxis: { automargin: true, gridcolor: "white", linecolor: "white", ticks: "", title: { standoff: 15 }, zerolinecolor: "white", zerolinewidth: 2 },
                },
            },
            width: 1100,
            xaxis: { fixedrange: true },
            yaxis: { fixedrange: true },
        },
        { responsive: true }
    );
}

// Avg Likes/Dislikes

window.PLOTLYENV = window.PLOTLYENV || {};
if (document.getElementById("avg_like_dislike")) {
    Plotly.newPlot(
        "avg_like_dislike",
        [
            { name: "Average Likes per video", x: ["Samsung", "Apple", "Huawei", "Xiaomi", "Oppo"], y: [774, 1863, 773, 1059, 1207], type: "bar" },
            { name: "Average Dislikes per video", x: ["Samsung", "Apple", "Huawei", "Xiaomi", "Oppo"], y: [84, 210, 64, 90, 250], type: "bar" },
        ],
        {
            height: 500,
            template: {
                data: {
                    barpolar: [{ marker: { line: { color: "#E5ECF6", width: 0.5 }, pattern: { fillmode: "overlay", size: 10, solidity: 0.2 } }, type: "barpolar" }],
                    bar: [{ error_x: { color: "#2a3f5f" }, error_y: { color: "#2a3f5f" }, marker: { line: { color: "#E5ECF6", width: 0.5 }, pattern: { fillmode: "overlay", size: 10, solidity: 0.2 } }, type: "bar" }],
                    carpet: [
                        {
                            aaxis: { endlinecolor: "#2a3f5f", gridcolor: "white", linecolor: "white", minorgridcolor: "white", startlinecolor: "#2a3f5f" },
                            baxis: { endlinecolor: "#2a3f5f", gridcolor: "white", linecolor: "white", minorgridcolor: "white", startlinecolor: "#2a3f5f" },
                            type: "carpet",
                        },
                    ],
                    choropleth: [{ colorbar: { outlinewidth: 0, ticks: "" }, type: "choropleth" }],
                    contourcarpet: [{ colorbar: { outlinewidth: 0, ticks: "" }, type: "contourcarpet" }],
                    contour: [
                        {
                            colorbar: { outlinewidth: 0, ticks: "" },
                            colorscale: [
                                [0.0, "#0d0887"],
                                [0.1111111111111111, "#46039f"],
                                [0.2222222222222222, "#7201a8"],
                                [0.3333333333333333, "#9c179e"],
                                [0.4444444444444444, "#bd3786"],
                                [0.5555555555555556, "#d8576b"],
                                [0.6666666666666666, "#ed7953"],
                                [0.7777777777777778, "#fb9f3a"],
                                [0.8888888888888888, "#fdca26"],
                                [1.0, "#f0f921"],
                            ],
                            type: "contour",
                        },
                    ],
                    heatmapgl: [
                        {
                            colorbar: { outlinewidth: 0, ticks: "" },
                            colorscale: [
                                [0.0, "#0d0887"],
                                [0.1111111111111111, "#46039f"],
                                [0.2222222222222222, "#7201a8"],
                                [0.3333333333333333, "#9c179e"],
                                [0.4444444444444444, "#bd3786"],
                                [0.5555555555555556, "#d8576b"],
                                [0.6666666666666666, "#ed7953"],
                                [0.7777777777777778, "#fb9f3a"],
                                [0.8888888888888888, "#fdca26"],
                                [1.0, "#f0f921"],
                            ],
                            type: "heatmapgl",
                        },
                    ],
                    heatmap: [
                        {
                            colorbar: { outlinewidth: 0, ticks: "" },
                            colorscale: [
                                [0.0, "#0d0887"],
                                [0.1111111111111111, "#46039f"],
                                [0.2222222222222222, "#7201a8"],
                                [0.3333333333333333, "#9c179e"],
                                [0.4444444444444444, "#bd3786"],
                                [0.5555555555555556, "#d8576b"],
                                [0.6666666666666666, "#ed7953"],
                                [0.7777777777777778, "#fb9f3a"],
                                [0.8888888888888888, "#fdca26"],
                                [1.0, "#f0f921"],
                            ],
                            type: "heatmap",
                        },
                    ],
                    histogram2dcontour: [
                        {
                            colorbar: { outlinewidth: 0, ticks: "" },
                            colorscale: [
                                [0.0, "#0d0887"],
                                [0.1111111111111111, "#46039f"],
                                [0.2222222222222222, "#7201a8"],
                                [0.3333333333333333, "#9c179e"],
                                [0.4444444444444444, "#bd3786"],
                                [0.5555555555555556, "#d8576b"],
                                [0.6666666666666666, "#ed7953"],
                                [0.7777777777777778, "#fb9f3a"],
                                [0.8888888888888888, "#fdca26"],
                                [1.0, "#f0f921"],
                            ],
                            type: "histogram2dcontour",
                        },
                    ],
                    histogram2d: [
                        {
                            colorbar: { outlinewidth: 0, ticks: "" },
                            colorscale: [
                                [0.0, "#0d0887"],
                                [0.1111111111111111, "#46039f"],
                                [0.2222222222222222, "#7201a8"],
                                [0.3333333333333333, "#9c179e"],
                                [0.4444444444444444, "#bd3786"],
                                [0.5555555555555556, "#d8576b"],
                                [0.6666666666666666, "#ed7953"],
                                [0.7777777777777778, "#fb9f3a"],
                                [0.8888888888888888, "#fdca26"],
                                [1.0, "#f0f921"],
                            ],
                            type: "histogram2d",
                        },
                    ],
                    histogram: [{ marker: { pattern: { fillmode: "overlay", size: 10, solidity: 0.2 } }, type: "histogram" }],
                    mesh3d: [{ colorbar: { outlinewidth: 0, ticks: "" }, type: "mesh3d" }],
                    parcoords: [{ line: { colorbar: { outlinewidth: 0, ticks: "" } }, type: "parcoords" }],
                    pie: [{ automargin: true, type: "pie" }],
                    scatter3d: [{ line: { colorbar: { outlinewidth: 0, ticks: "" } }, marker: { colorbar: { outlinewidth: 0, ticks: "" } }, type: "scatter3d" }],
                    scattercarpet: [{ marker: { colorbar: { outlinewidth: 0, ticks: "" } }, type: "scattercarpet" }],
                    scattergeo: [{ marker: { colorbar: { outlinewidth: 0, ticks: "" } }, type: "scattergeo" }],
                    scattergl: [{ marker: { colorbar: { outlinewidth: 0, ticks: "" } }, type: "scattergl" }],
                    scattermapbox: [{ marker: { colorbar: { outlinewidth: 0, ticks: "" } }, type: "scattermapbox" }],
                    scatterpolargl: [{ marker: { colorbar: { outlinewidth: 0, ticks: "" } }, type: "scatterpolargl" }],
                    scatterpolar: [{ marker: { colorbar: { outlinewidth: 0, ticks: "" } }, type: "scatterpolar" }],
                    scatter: [{ marker: { colorbar: { outlinewidth: 0, ticks: "" } }, type: "scatter" }],
                    scatterternary: [{ marker: { colorbar: { outlinewidth: 0, ticks: "" } }, type: "scatterternary" }],
                    surface: [
                        {
                            colorbar: { outlinewidth: 0, ticks: "" },
                            colorscale: [
                                [0.0, "#0d0887"],
                                [0.1111111111111111, "#46039f"],
                                [0.2222222222222222, "#7201a8"],
                                [0.3333333333333333, "#9c179e"],
                                [0.4444444444444444, "#bd3786"],
                                [0.5555555555555556, "#d8576b"],
                                [0.6666666666666666, "#ed7953"],
                                [0.7777777777777778, "#fb9f3a"],
                                [0.8888888888888888, "#fdca26"],
                                [1.0, "#f0f921"],
                            ],
                            type: "surface",
                        },
                    ],
                    table: [{ cells: { fill: { color: "#EBF0F8" }, line: { color: "white" } }, header: { fill: { color: "#C8D4E3" }, line: { color: "white" } }, type: "table" }],
                },
                layout: {
                    annotationdefaults: { arrowcolor: "#2a3f5f", arrowhead: 0, arrowwidth: 1 },
                    autotypenumbers: "strict",
                    coloraxis: { colorbar: { outlinewidth: 0, ticks: "" } },
                    colorscale: {
                        diverging: [
                            [0, "#8e0152"],
                            [0.1, "#c51b7d"],
                            [0.2, "#de77ae"],
                            [0.3, "#f1b6da"],
                            [0.4, "#fde0ef"],
                            [0.5, "#f7f7f7"],
                            [0.6, "#e6f5d0"],
                            [0.7, "#b8e186"],
                            [0.8, "#7fbc41"],
                            [0.9, "#4d9221"],
                            [1, "#276419"],
                        ],
                        sequential: [
                            [0.0, "#0d0887"],
                            [0.1111111111111111, "#46039f"],
                            [0.2222222222222222, "#7201a8"],
                            [0.3333333333333333, "#9c179e"],
                            [0.4444444444444444, "#bd3786"],
                            [0.5555555555555556, "#d8576b"],
                            [0.6666666666666666, "#ed7953"],
                            [0.7777777777777778, "#fb9f3a"],
                            [0.8888888888888888, "#fdca26"],
                            [1.0, "#f0f921"],
                        ],
                        sequentialminus: [
                            [0.0, "#0d0887"],
                            [0.1111111111111111, "#46039f"],
                            [0.2222222222222222, "#7201a8"],
                            [0.3333333333333333, "#9c179e"],
                            [0.4444444444444444, "#bd3786"],
                            [0.5555555555555556, "#d8576b"],
                            [0.6666666666666666, "#ed7953"],
                            [0.7777777777777778, "#fb9f3a"],
                            [0.8888888888888888, "#fdca26"],
                            [1.0, "#f0f921"],
                        ],
                    },
                    colorway: ["#636efa", "#EF553B", "#00cc96", "#ab63fa", "#FFA15A", "#19d3f3", "#FF6692", "#B6E880", "#FF97FF", "#FECB52"],
                    font: { color: "#2a3f5f" },
                    geo: { bgcolor: "white", lakecolor: "white", landcolor: "#E5ECF6", showlakes: true, showland: true, subunitcolor: "white" },
                    hoverlabel: { align: "left" },
                    hovermode: "closest",
                    mapbox: { style: "light" },
                    paper_bgcolor: "white",
                    plot_bgcolor: "#E5ECF6",
                    polar: { angularaxis: { gridcolor: "white", linecolor: "white", ticks: "" }, bgcolor: "#E5ECF6", radialaxis: { gridcolor: "white", linecolor: "white", ticks: "" } },
                    scene: {
                        xaxis: { backgroundcolor: "#E5ECF6", gridcolor: "white", gridwidth: 2, linecolor: "white", showbackground: true, ticks: "", zerolinecolor: "white" },
                        yaxis: { backgroundcolor: "#E5ECF6", gridcolor: "white", gridwidth: 2, linecolor: "white", showbackground: true, ticks: "", zerolinecolor: "white" },
                        zaxis: { backgroundcolor: "#E5ECF6", gridcolor: "white", gridwidth: 2, linecolor: "white", showbackground: true, ticks: "", zerolinecolor: "white" },
                    },
                    shapedefaults: { line: { color: "#2a3f5f" } },
                    ternary: {
                        aaxis: { gridcolor: "white", linecolor: "white", ticks: "" },
                        baxis: { gridcolor: "white", linecolor: "white", ticks: "" },
                        bgcolor: "#E5ECF6",
                        caxis: { gridcolor: "white", linecolor: "white", ticks: "" },
                    },
                    title: { x: 0.5 },
                    xaxis: { automargin: true, gridcolor: "white", linecolor: "white", ticks: "", title: { standoff: 15 }, zerolinecolor: "white", zerolinewidth: 2 },
                    yaxis: { automargin: true, gridcolor: "white", linecolor: "white", ticks: "", title: { standoff: 15 }, zerolinecolor: "white", zerolinewidth: 2 },
                },
            },
            title: { text: "Avg Likes and Dislikes per video for selected Brands" },
            width: 1000,
            xaxis: { title: { text: "Brand" } },
            yaxis: { title: { text: "Avg Likes and Dislikes per video" } },
        },
        { responsive: true }
    );
}


// Common Adjectives

window.PLOTLYENV = window.PLOTLYENV || {};
if (document.getElementById("common_adjectives_comparison")) {
    Plotly.newPlot("common_adjectives_comparison", [{
        "name": "Samsung",
        "x": ["Pro", "New", "Best", "First", "Full", "Better", "Free", "Hard", "Live", "Part", "Quick", "Easy", "Now", "Home", "Back", "Faster", "Fast", "Daily", "Good", "Super"],
        "y": [3245, 3016, 3011, 2925, 1842, 1828, 1069, 990, 985, 974, 710, 622, 466, 465, 429, 418, 408, 401, 389, 387],
        "type": "bar"
    }, {
        "name": "Apple",
        "x": ["New", "Best", "Pro", "First", "Free", "Live", "Full", "Home", "Better", "Part", "Now", "Faster", "Back", "Quick", "Daily", "Easy", "Good", "Fast", "Super", "Hard"],
        "y": [4508, 2638, 1657, 1415, 1108, 551, 514, 419, 412, 398, 395, 327, 325, 261, 237, 215, 205, 203, 171, 139],
        "type": "bar"
    }, {
        "name": "Huawei",
        "x": ["Pro", "Best", "New", "Better", "Free", "First", "Live", "Home", "Full", "Part", "Daily", "Hard", "Now", "Quick", "Back", "Super", "Good", "Fast", "Easy", "Faster"],
        "y": [3844, 2894, 2777, 1603, 1332, 1193, 898, 694, 637, 579, 383, 364, 247, 229, 188, 167, 157, 137, 133, 74],
        "type": "bar"
    }, {
        "name": "Xiaomi",
        "x": ["Pro", "New", "Best", "First", "Full", "Better", "Live", "Free", "Part", "Quick", "Now", "Daily", "Home", "Fast", "Good", "Back", "Easy", "Hard", "Super", "Faster"],
        "y": [12155, 3544, 3408, 2444, 2294, 1635, 1154, 1104, 874, 563, 541, 540, 504, 457, 444, 369, 341, 297, 273, 130],
        "type": "bar"
    }, {
        "name": "Oppo",
        "x": ["Pro", "Better", "First", "Full", "Best", "New", "Hard", "Quick", "Live", "Now", "Part", "Free", "Fast", "Super", "Back", "Faster", "Good", "Home", "Easy", "Daily"],
        "y": [1277, 526, 356, 274, 206, 165, 120, 68, 63, 55, 50, 46, 39, 35, 27, 26, 23, 16, 15, 13],
        "type": "bar"
    }], {
        "barmode": "group",
        "template": {
            "data": {
                "barpolar": [{
                    "marker": {
                        "line": {
                            "color": "#E5ECF6",
                            "width": 0.5
                        },
                        "pattern": {
                            "fillmode": "overlay",
                            "size": 10,
                            "solidity": 0.2
                        }
                    },
                    "type": "barpolar"
                }],
                "bar": [{
                    "error_x": {
                        "color": "#2a3f5f"
                    },
                    "error_y": {
                        "color": "#2a3f5f"
                    },
                    "marker": {
                        "line": {
                            "color": "#E5ECF6",
                            "width": 0.5
                        },
                        "pattern": {
                            "fillmode": "overlay",
                            "size": 10,
                            "solidity": 0.2
                        }
                    },
                    "type": "bar"
                }],
                "carpet": [{
                    "aaxis": {
                        "endlinecolor": "#2a3f5f",
                        "gridcolor": "white",
                        "linecolor": "white",
                        "minorgridcolor": "white",
                        "startlinecolor": "#2a3f5f"
                    },
                    "baxis": {
                        "endlinecolor": "#2a3f5f",
                        "gridcolor": "white",
                        "linecolor": "white",
                        "minorgridcolor": "white",
                        "startlinecolor": "#2a3f5f"
                    },
                    "type": "carpet"
                }],
                "choropleth": [{
                    "colorbar": {
                        "outlinewidth": 0,
                        "ticks": ""
                    },
                    "type": "choropleth"
                }],
                "contourcarpet": [{
                    "colorbar": {
                        "outlinewidth": 0,
                        "ticks": ""
                    },
                    "type": "contourcarpet"
                }],
                "contour": [{
                    "colorbar": {
                        "outlinewidth": 0,
                        "ticks": ""
                    },
                    "colorscale": [
                        [0.0, "#0d0887"],
                        [0.1111111111111111, "#46039f"],
                        [0.2222222222222222, "#7201a8"],
                        [0.3333333333333333, "#9c179e"],
                        [0.4444444444444444, "#bd3786"],
                        [0.5555555555555556, "#d8576b"],
                        [0.6666666666666666, "#ed7953"],
                        [0.7777777777777778, "#fb9f3a"],
                        [0.8888888888888888, "#fdca26"],
                        [1.0, "#f0f921"]
                    ],
                    "type": "contour"
                }],
                "heatmapgl": [{
                    "colorbar": {
                        "outlinewidth": 0,
                        "ticks": ""
                    },
                    "colorscale": [
                        [0.0, "#0d0887"],
                        [0.1111111111111111, "#46039f"],
                        [0.2222222222222222, "#7201a8"],
                        [0.3333333333333333, "#9c179e"],
                        [0.4444444444444444, "#bd3786"],
                        [0.5555555555555556, "#d8576b"],
                        [0.6666666666666666, "#ed7953"],
                        [0.7777777777777778, "#fb9f3a"],
                        [0.8888888888888888, "#fdca26"],
                        [1.0, "#f0f921"]
                    ],
                    "type": "heatmapgl"
                }],
                "heatmap": [{
                    "colorbar": {
                        "outlinewidth": 0,
                        "ticks": ""
                    },
                    "colorscale": [
                        [0.0, "#0d0887"],
                        [0.1111111111111111, "#46039f"],
                        [0.2222222222222222, "#7201a8"],
                        [0.3333333333333333, "#9c179e"],
                        [0.4444444444444444, "#bd3786"],
                        [0.5555555555555556, "#d8576b"],
                        [0.6666666666666666, "#ed7953"],
                        [0.7777777777777778, "#fb9f3a"],
                        [0.8888888888888888, "#fdca26"],
                        [1.0, "#f0f921"]
                    ],
                    "type": "heatmap"
                }],
                "histogram2dcontour": [{
                    "colorbar": {
                        "outlinewidth": 0,
                        "ticks": ""
                    },
                    "colorscale": [
                        [0.0, "#0d0887"],
                        [0.1111111111111111, "#46039f"],
                        [0.2222222222222222, "#7201a8"],
                        [0.3333333333333333, "#9c179e"],
                        [0.4444444444444444, "#bd3786"],
                        [0.5555555555555556, "#d8576b"],
                        [0.6666666666666666, "#ed7953"],
                        [0.7777777777777778, "#fb9f3a"],
                        [0.8888888888888888, "#fdca26"],
                        [1.0, "#f0f921"]
                    ],
                    "type": "histogram2dcontour"
                }],
                "histogram2d": [{
                    "colorbar": {
                        "outlinewidth": 0,
                        "ticks": ""
                    },
                    "colorscale": [
                        [0.0, "#0d0887"],
                        [0.1111111111111111, "#46039f"],
                        [0.2222222222222222, "#7201a8"],
                        [0.3333333333333333, "#9c179e"],
                        [0.4444444444444444, "#bd3786"],
                        [0.5555555555555556, "#d8576b"],
                        [0.6666666666666666, "#ed7953"],
                        [0.7777777777777778, "#fb9f3a"],
                        [0.8888888888888888, "#fdca26"],
                        [1.0, "#f0f921"]
                    ],
                    "type": "histogram2d"
                }],
                "histogram": [{
                    "marker": {
                        "pattern": {
                            "fillmode": "overlay",
                            "size": 10,
                            "solidity": 0.2
                        }
                    },
                    "type": "histogram"
                }],
                "mesh3d": [{
                    "colorbar": {
                        "outlinewidth": 0,
                        "ticks": ""
                    },
                    "type": "mesh3d"
                }],
                "parcoords": [{
                    "line": {
                        "colorbar": {
                            "outlinewidth": 0,
                            "ticks": ""
                        }
                    },
                    "type": "parcoords"
                }],
                "pie": [{
                    "automargin": true,
                    "type": "pie"
                }],
                "scatter3d": [{
                    "line": {
                        "colorbar": {
                            "outlinewidth": 0,
                            "ticks": ""
                        }
                    },
                    "marker": {
                        "colorbar": {
                            "outlinewidth": 0,
                            "ticks": ""
                        }
                    },
                    "type": "scatter3d"
                }],
                "scattercarpet": [{
                    "marker": {
                        "colorbar": {
                            "outlinewidth": 0,
                            "ticks": ""
                        }
                    },
                    "type": "scattercarpet"
                }],
                "scattergeo": [{
                    "marker": {
                        "colorbar": {
                            "outlinewidth": 0,
                            "ticks": ""
                        }
                    },
                    "type": "scattergeo"
                }],
                "scattergl": [{
                    "marker": {
                        "colorbar": {
                            "outlinewidth": 0,
                            "ticks": ""
                        }
                    },
                    "type": "scattergl"
                }],
                "scattermapbox": [{
                    "marker": {
                        "colorbar": {
                            "outlinewidth": 0,
                            "ticks": ""
                        }
                    },
                    "type": "scattermapbox"
                }],
                "scatterpolargl": [{
                    "marker": {
                        "colorbar": {
                            "outlinewidth": 0,
                            "ticks": ""
                        }
                    },
                    "type": "scatterpolargl"
                }],
                "scatterpolar": [{
                    "marker": {
                        "colorbar": {
                            "outlinewidth": 0,
                            "ticks": ""
                        }
                    },
                    "type": "scatterpolar"
                }],
                "scatter": [{
                    "fillpattern": {
                        "fillmode": "overlay",
                        "size": 10,
                        "solidity": 0.2
                    },
                    "type": "scatter"
                }],
                "scatterternary": [{
                    "marker": {
                        "colorbar": {
                            "outlinewidth": 0,
                            "ticks": ""
                        }
                    },
                    "type": "scatterternary"
                }],
                "surface": [{
                    "colorbar": {
                        "outlinewidth": 0,
                        "ticks": ""
                    },
                    "colorscale": [
                        [0.0, "#0d0887"],
                        [0.1111111111111111, "#46039f"],
                        [0.2222222222222222, "#7201a8"],
                        [0.3333333333333333, "#9c179e"],
                        [0.4444444444444444, "#bd3786"],
                        [0.5555555555555556, "#d8576b"],
                        [0.6666666666666666, "#ed7953"],
                        [0.7777777777777778, "#fb9f3a"],
                        [0.8888888888888888, "#fdca26"],
                        [1.0, "#f0f921"]
                    ],
                    "type": "surface"
                }],
                "table": [{
                    "cells": {
                        "fill": {
                            "color": "#EBF0F8"
                        },
                        "line": {
                            "color": "white"
                        }
                    },
                    "header": {
                        "fill": {
                            "color": "#C8D4E3"
                        },
                        "line": {
                            "color": "white"
                        }
                    },
                    "type": "table"
                }]
            },
            "layout": {
                "annotationdefaults": {
                    "arrowcolor": "#2a3f5f",
                    "arrowhead": 0,
                    "arrowwidth": 1
                },
                "autotypenumbers": "strict",
                "coloraxis": {
                    "colorbar": {
                        "outlinewidth": 0,
                        "ticks": ""
                    }
                },
                "colorscale": {
                    "diverging": [
                        [0, "#8e0152"],
                        [0.1, "#c51b7d"],
                        [0.2, "#de77ae"],
                        [0.3, "#f1b6da"],
                        [0.4, "#fde0ef"],
                        [0.5, "#f7f7f7"],
                        [0.6, "#e6f5d0"],
                        [0.7, "#b8e186"],
                        [0.8, "#7fbc41"],
                        [0.9, "#4d9221"],
                        [1, "#276419"]
                    ],
                    "sequential": [
                        [0.0, "#0d0887"],
                        [0.1111111111111111, "#46039f"],
                        [0.2222222222222222, "#7201a8"],
                        [0.3333333333333333, "#9c179e"],
                        [0.4444444444444444, "#bd3786"],
                        [0.5555555555555556, "#d8576b"],
                        [0.6666666666666666, "#ed7953"],
                        [0.7777777777777778, "#fb9f3a"],
                        [0.8888888888888888, "#fdca26"],
                        [1.0, "#f0f921"]
                    ],
                    "sequentialminus": [
                        [0.0, "#0d0887"],
                        [0.1111111111111111, "#46039f"],
                        [0.2222222222222222, "#7201a8"],
                        [0.3333333333333333, "#9c179e"],
                        [0.4444444444444444, "#bd3786"],
                        [0.5555555555555556, "#d8576b"],
                        [0.6666666666666666, "#ed7953"],
                        [0.7777777777777778, "#fb9f3a"],
                        [0.8888888888888888, "#fdca26"],
                        [1.0, "#f0f921"]
                    ]
                },
                "colorway": ["#636efa", "#EF553B", "#00cc96", "#ab63fa", "#FFA15A", "#19d3f3", "#FF6692", "#B6E880", "#FF97FF", "#FECB52"],
                "font": {
                    "color": "#2a3f5f"
                },
                "geo": {
                    "bgcolor": "white",
                    "lakecolor": "white",
                    "landcolor": "#E5ECF6",
                    "showlakes": true,
                    "showland": true,
                    "subunitcolor": "white"
                },
                "hoverlabel": {
                    "align": "left"
                },
                "hovermode": "closest",
                "mapbox": {
                    "style": "light"
                },
                "paper_bgcolor": "white",
                "plot_bgcolor": "#E5ECF6",
                "polar": {
                    "angularaxis": {
                        "gridcolor": "white",
                        "linecolor": "white",
                        "ticks": ""
                    },
                    "bgcolor": "#E5ECF6",
                    "radialaxis": {
                        "gridcolor": "white",
                        "linecolor": "white",
                        "ticks": ""
                    }
                },
                "scene": {
                    "xaxis": {
                        "backgroundcolor": "#E5ECF6",
                        "gridcolor": "white",
                        "gridwidth": 2,
                        "linecolor": "white",
                        "showbackground": true,
                        "ticks": "",
                        "zerolinecolor": "white"
                    },
                    "yaxis": {
                        "backgroundcolor": "#E5ECF6",
                        "gridcolor": "white",
                        "gridwidth": 2,
                        "linecolor": "white",
                        "showbackground": true,
                        "ticks": "",
                        "zerolinecolor": "white"
                    },
                    "zaxis": {
                        "backgroundcolor": "#E5ECF6",
                        "gridcolor": "white",
                        "gridwidth": 2,
                        "linecolor": "white",
                        "showbackground": true,
                        "ticks": "",
                        "zerolinecolor": "white"
                    }
                },
                "shapedefaults": {
                    "line": {
                        "color": "#2a3f5f"
                    }
                },
                "ternary": {
                    "aaxis": {
                        "gridcolor": "white",
                        "linecolor": "white",
                        "ticks": ""
                    },
                    "baxis": {
                        "gridcolor": "white",
                        "linecolor": "white",
                        "ticks": ""
                    },
                    "bgcolor": "#E5ECF6",
                    "caxis": {
                        "gridcolor": "white",
                        "linecolor": "white",
                        "ticks": ""
                    }
                },
                "title": {
                    "x": 0.05
                },
                "xaxis": {
                    "automargin": true,
                    "gridcolor": "white",
                    "linecolor": "white",
                    "ticks": "",
                    "title": {
                        "standoff": 15
                    },
                    "zerolinecolor": "white",
                    "zerolinewidth": 2
                },
                "yaxis": {
                    "automargin": true,
                    "gridcolor": "white",
                    "linecolor": "white",
                    "ticks": "",
                    "title": {
                        "standoff": 15
                    },
                    "zerolinecolor": "white",
                    "zerolinewidth": 2
                }
            }
        },
        "title": {
            "text": "Most Fequently Occuring Common Adjectives",
            "x": 0.5
        },
        "xaxis": {
            "categoryorder": "total descending",
            "tickangle": -45,
            "title": {
                "text": "Adjective Words"
            }
        },
        "yaxis": {
            "title": {
                "text": "Frequency"
            },
            "type": "log"
        }
    }, {
        "responsive": true
    })
};


// DTW Distances

window.PLOTLYENV = window.PLOTLYENV || {};
if (document.getElementById("dtw_distances")) {
    Plotly.newPlot("dtw_distances", [{
        "alignmentgroup": "True",
        "hovertemplate": "variable=0<br>Brand=%{x}<br>DTW Distance=%{y}<extra></extra>",
        "legendgroup": "0",
        "marker": {
            "color": "#636efa",
            "pattern": {
                "shape": ""
            }
        },
        "name": "0",
        "offsetgroup": "0",
        "orientation": "v",
        "showlegend": true,
        "textposition": "auto",
        "x": ["Apple", "Huawei", "Xiaomi", "Samsung", "Oppo"],
        "xaxis": "x",
        "y": [1.642844128219317, 3.9302866624134216, 5.268938173032035, 5.695663028795768, 4.918706499920495],
        "yaxis": "y",
        "type": "bar"
    }], {
        "barmode": "stack",
        "legend": {
            "title": {
                "text": "variable"
            },
            "tracegroupgap": 0
        },
        "showlegend": false,
        "template": {
            "data": {
                "barpolar": [{
                    "marker": {
                        "line": {
                            "color": "#E5ECF6",
                            "width": 0.5
                        },
                        "pattern": {
                            "fillmode": "overlay",
                            "size": 10,
                            "solidity": 0.2
                        }
                    },
                    "type": "barpolar"
                }],
                "bar": [{
                    "error_x": {
                        "color": "#2a3f5f"
                    },
                    "error_y": {
                        "color": "#2a3f5f"
                    },
                    "marker": {
                        "line": {
                            "color": "#E5ECF6",
                            "width": 0.5
                        },
                        "pattern": {
                            "fillmode": "overlay",
                            "size": 10,
                            "solidity": 0.2
                        }
                    },
                    "type": "bar"
                }],
                "carpet": [{
                    "aaxis": {
                        "endlinecolor": "#2a3f5f",
                        "gridcolor": "white",
                        "linecolor": "white",
                        "minorgridcolor": "white",
                        "startlinecolor": "#2a3f5f"
                    },
                    "baxis": {
                        "endlinecolor": "#2a3f5f",
                        "gridcolor": "white",
                        "linecolor": "white",
                        "minorgridcolor": "white",
                        "startlinecolor": "#2a3f5f"
                    },
                    "type": "carpet"
                }],
                "choropleth": [{
                    "colorbar": {
                        "outlinewidth": 0,
                        "ticks": ""
                    },
                    "type": "choropleth"
                }],
                "contourcarpet": [{
                    "colorbar": {
                        "outlinewidth": 0,
                        "ticks": ""
                    },
                    "type": "contourcarpet"
                }],
                "contour": [{
                    "colorbar": {
                        "outlinewidth": 0,
                        "ticks": ""
                    },
                    "colorscale": [
                        [0.0, "#0d0887"],
                        [0.1111111111111111, "#46039f"],
                        [0.2222222222222222, "#7201a8"],
                        [0.3333333333333333, "#9c179e"],
                        [0.4444444444444444, "#bd3786"],
                        [0.5555555555555556, "#d8576b"],
                        [0.6666666666666666, "#ed7953"],
                        [0.7777777777777778, "#fb9f3a"],
                        [0.8888888888888888, "#fdca26"],
                        [1.0, "#f0f921"]
                    ],
                    "type": "contour"
                }],
                "heatmapgl": [{
                    "colorbar": {
                        "outlinewidth": 0,
                        "ticks": ""
                    },
                    "colorscale": [
                        [0.0, "#0d0887"],
                        [0.1111111111111111, "#46039f"],
                        [0.2222222222222222, "#7201a8"],
                        [0.3333333333333333, "#9c179e"],
                        [0.4444444444444444, "#bd3786"],
                        [0.5555555555555556, "#d8576b"],
                        [0.6666666666666666, "#ed7953"],
                        [0.7777777777777778, "#fb9f3a"],
                        [0.8888888888888888, "#fdca26"],
                        [1.0, "#f0f921"]
                    ],
                    "type": "heatmapgl"
                }],
                "heatmap": [{
                    "colorbar": {
                        "outlinewidth": 0,
                        "ticks": ""
                    },
                    "colorscale": [
                        [0.0, "#0d0887"],
                        [0.1111111111111111, "#46039f"],
                        [0.2222222222222222, "#7201a8"],
                        [0.3333333333333333, "#9c179e"],
                        [0.4444444444444444, "#bd3786"],
                        [0.5555555555555556, "#d8576b"],
                        [0.6666666666666666, "#ed7953"],
                        [0.7777777777777778, "#fb9f3a"],
                        [0.8888888888888888, "#fdca26"],
                        [1.0, "#f0f921"]
                    ],
                    "type": "heatmap"
                }],
                "histogram2dcontour": [{
                    "colorbar": {
                        "outlinewidth": 0,
                        "ticks": ""
                    },
                    "colorscale": [
                        [0.0, "#0d0887"],
                        [0.1111111111111111, "#46039f"],
                        [0.2222222222222222, "#7201a8"],
                        [0.3333333333333333, "#9c179e"],
                        [0.4444444444444444, "#bd3786"],
                        [0.5555555555555556, "#d8576b"],
                        [0.6666666666666666, "#ed7953"],
                        [0.7777777777777778, "#fb9f3a"],
                        [0.8888888888888888, "#fdca26"],
                        [1.0, "#f0f921"]
                    ],
                    "type": "histogram2dcontour"
                }],
                "histogram2d": [{
                    "colorbar": {
                        "outlinewidth": 0,
                        "ticks": ""
                    },
                    "colorscale": [
                        [0.0, "#0d0887"],
                        [0.1111111111111111, "#46039f"],
                        [0.2222222222222222, "#7201a8"],
                        [0.3333333333333333, "#9c179e"],
                        [0.4444444444444444, "#bd3786"],
                        [0.5555555555555556, "#d8576b"],
                        [0.6666666666666666, "#ed7953"],
                        [0.7777777777777778, "#fb9f3a"],
                        [0.8888888888888888, "#fdca26"],
                        [1.0, "#f0f921"]
                    ],
                    "type": "histogram2d"
                }],
                "histogram": [{
                    "marker": {
                        "pattern": {
                            "fillmode": "overlay",
                            "size": 10,
                            "solidity": 0.2
                        }
                    },
                    "type": "histogram"
                }],
                "mesh3d": [{
                    "colorbar": {
                        "outlinewidth": 0,
                        "ticks": ""
                    },
                    "type": "mesh3d"
                }],
                "parcoords": [{
                    "line": {
                        "colorbar": {
                            "outlinewidth": 0,
                            "ticks": ""
                        }
                    },
                    "type": "parcoords"
                }],
                "pie": [{
                    "automargin": true,
                    "type": "pie"
                }],
                "scatter3d": [{
                    "line": {
                        "colorbar": {
                            "outlinewidth": 0,
                            "ticks": ""
                        }
                    },
                    "marker": {
                        "colorbar": {
                            "outlinewidth": 0,
                            "ticks": ""
                        }
                    },
                    "type": "scatter3d"
                }],
                "scattercarpet": [{
                    "marker": {
                        "colorbar": {
                            "outlinewidth": 0,
                            "ticks": ""
                        }
                    },
                    "type": "scattercarpet"
                }],
                "scattergeo": [{
                    "marker": {
                        "colorbar": {
                            "outlinewidth": 0,
                            "ticks": ""
                        }
                    },
                    "type": "scattergeo"
                }],
                "scattergl": [{
                    "marker": {
                        "colorbar": {
                            "outlinewidth": 0,
                            "ticks": ""
                        }
                    },
                    "type": "scattergl"
                }],
                "scattermapbox": [{
                    "marker": {
                        "colorbar": {
                            "outlinewidth": 0,
                            "ticks": ""
                        }
                    },
                    "type": "scattermapbox"
                }],
                "scatterpolargl": [{
                    "marker": {
                        "colorbar": {
                            "outlinewidth": 0,
                            "ticks": ""
                        }
                    },
                    "type": "scatterpolargl"
                }],
                "scatterpolar": [{
                    "marker": {
                        "colorbar": {
                            "outlinewidth": 0,
                            "ticks": ""
                        }
                    },
                    "type": "scatterpolar"
                }],
                "scatter": [{
                    "fillpattern": {
                        "fillmode": "overlay",
                        "size": 10,
                        "solidity": 0.2
                    },
                    "type": "scatter"
                }],
                "scatterternary": [{
                    "marker": {
                        "colorbar": {
                            "outlinewidth": 0,
                            "ticks": ""
                        }
                    },
                    "type": "scatterternary"
                }],
                "surface": [{
                    "colorbar": {
                        "outlinewidth": 0,
                        "ticks": ""
                    },
                    "colorscale": [
                        [0.0, "#0d0887"],
                        [0.1111111111111111, "#46039f"],
                        [0.2222222222222222, "#7201a8"],
                        [0.3333333333333333, "#9c179e"],
                        [0.4444444444444444, "#bd3786"],
                        [0.5555555555555556, "#d8576b"],
                        [0.6666666666666666, "#ed7953"],
                        [0.7777777777777778, "#fb9f3a"],
                        [0.8888888888888888, "#fdca26"],
                        [1.0, "#f0f921"]
                    ],
                    "type": "surface"
                }],
                "table": [{
                    "cells": {
                        "fill": {
                            "color": "#EBF0F8"
                        },
                        "line": {
                            "color": "white"
                        }
                    },
                    "header": {
                        "fill": {
                            "color": "#C8D4E3"
                        },
                        "line": {
                            "color": "white"
                        }
                    },
                    "type": "table"
                }]
            },
            "layout": {
                "annotationdefaults": {
                    "arrowcolor": "#2a3f5f",
                    "arrowhead": 0,
                    "arrowwidth": 1
                },
                "autotypenumbers": "strict",
                "coloraxis": {
                    "colorbar": {
                        "outlinewidth": 0,
                        "ticks": ""
                    }
                },
                "colorscale": {
                    "diverging": [
                        [0, "#8e0152"],
                        [0.1, "#c51b7d"],
                        [0.2, "#de77ae"],
                        [0.3, "#f1b6da"],
                        [0.4, "#fde0ef"],
                        [0.5, "#f7f7f7"],
                        [0.6, "#e6f5d0"],
                        [0.7, "#b8e186"],
                        [0.8, "#7fbc41"],
                        [0.9, "#4d9221"],
                        [1, "#276419"]
                    ],
                    "sequential": [
                        [0.0, "#0d0887"],
                        [0.1111111111111111, "#46039f"],
                        [0.2222222222222222, "#7201a8"],
                        [0.3333333333333333, "#9c179e"],
                        [0.4444444444444444, "#bd3786"],
                        [0.5555555555555556, "#d8576b"],
                        [0.6666666666666666, "#ed7953"],
                        [0.7777777777777778, "#fb9f3a"],
                        [0.8888888888888888, "#fdca26"],
                        [1.0, "#f0f921"]
                    ],
                    "sequentialminus": [
                        [0.0, "#0d0887"],
                        [0.1111111111111111, "#46039f"],
                        [0.2222222222222222, "#7201a8"],
                        [0.3333333333333333, "#9c179e"],
                        [0.4444444444444444, "#bd3786"],
                        [0.5555555555555556, "#d8576b"],
                        [0.6666666666666666, "#ed7953"],
                        [0.7777777777777778, "#fb9f3a"],
                        [0.8888888888888888, "#fdca26"],
                        [1.0, "#f0f921"]
                    ]
                },
                "colorway": ["#636efa", "#EF553B", "#00cc96", "#ab63fa", "#FFA15A", "#19d3f3", "#FF6692", "#B6E880", "#FF97FF", "#FECB52"],
                "font": {
                    "color": "#2a3f5f"
                },
                "geo": {
                    "bgcolor": "white",
                    "lakecolor": "white",
                    "landcolor": "#E5ECF6",
                    "showlakes": true,
                    "showland": true,
                    "subunitcolor": "white"
                },
                "hoverlabel": {
                    "align": "left"
                },
                "hovermode": "closest",
                "mapbox": {
                    "style": "light"
                },
                "paper_bgcolor": "white",
                "plot_bgcolor": "#E5ECF6",
                "polar": {
                    "angularaxis": {
                        "gridcolor": "white",
                        "linecolor": "white",
                        "ticks": ""
                    },
                    "bgcolor": "#E5ECF6",
                    "radialaxis": {
                        "gridcolor": "white",
                        "linecolor": "white",
                        "ticks": ""
                    }
                },
                "scene": {
                    "xaxis": {
                        "backgroundcolor": "#E5ECF6",
                        "gridcolor": "white",
                        "gridwidth": 2,
                        "linecolor": "white",
                        "showbackground": true,
                        "ticks": "",
                        "zerolinecolor": "white"
                    },
                    "yaxis": {
                        "backgroundcolor": "#E5ECF6",
                        "gridcolor": "white",
                        "gridwidth": 2,
                        "linecolor": "white",
                        "showbackground": true,
                        "ticks": "",
                        "zerolinecolor": "white"
                    },
                    "zaxis": {
                        "backgroundcolor": "#E5ECF6",
                        "gridcolor": "white",
                        "gridwidth": 2,
                        "linecolor": "white",
                        "showbackground": true,
                        "ticks": "",
                        "zerolinecolor": "white"
                    }
                },
                "shapedefaults": {
                    "line": {
                        "color": "#2a3f5f"
                    }
                },
                "ternary": {
                    "aaxis": {
                        "gridcolor": "white",
                        "linecolor": "white",
                        "ticks": ""
                    },
                    "baxis": {
                        "gridcolor": "white",
                        "linecolor": "white",
                        "ticks": ""
                    },
                    "bgcolor": "#E5ECF6",
                    "caxis": {
                        "gridcolor": "white",
                        "linecolor": "white",
                        "ticks": ""
                    }
                },
                "title": {
                    "x": 0.05
                },
                "xaxis": {
                    "automargin": true,
                    "gridcolor": "white",
                    "linecolor": "white",
                    "ticks": "",
                    "title": {
                        "standoff": 15
                    },
                    "zerolinecolor": "white",
                    "zerolinewidth": 2
                },
                "yaxis": {
                    "automargin": true,
                    "gridcolor": "white",
                    "linecolor": "white",
                    "ticks": "",
                    "title": {
                        "standoff": 15
                    },
                    "zerolinecolor": "white",
                    "zerolinewidth": 2
                }
            }
        },
        "title": {
            "text": "DTW Distance of Seasonality of Phone Releases and Videos posted of Brand",
            "x": 0.5
        },
        "uniformtext": {
            "minsize": 10,
            "mode": "hide"
        },
        "xaxis": {
            "anchor": "y",
            "domain": [0.0, 1.0],
            "title": {
                "text": "Brand"
            }
        },
        "yaxis": {
            "anchor": "x",
            "domain": [0.0, 1.0],
            "title": {
                "text": "DTW Distance"
            }
        }
    }, {
        "responsive": true
    })
};


