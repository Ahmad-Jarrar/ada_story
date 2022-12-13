window.PLOTLYENV = window.PLOTLYENV || {};
if (document.getElementById("brands_with_most_models")) {
    Plotly.newPlot("brands_with_most_models", [{
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
        "x": [79, 81, 84, 90, 91, 93, 100, 107, 110, 112, 116, 119, 128, 139, 149, 171, 176, 198, 229, 253, 258, 275, 283, 287, 304, 339, 347, 393, 570, 1085],
        "xaxis": "x",
        "y": ["Gionee", "XOLO", "Vodafone", "QMobile", "Panasonic", "Yezz", "Acer", "Plum", "Oppo", "Xiaomi", "Lava", "Spice", "vivo", "verykool", "Allview", "Asus", "Philips", "Lenovo", "Celkon", "HTC", "ZTE", "Sony", "Micromax", "Huawei", "BLU", "alcatel", "Motorola", "Nokia", "LG", "Samsung"],
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