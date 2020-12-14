## Overview
This is a web app used to predict gesture from a webcam using transfer learning. We will use a pre-trained truncated MobileNet model and train another model using the internal MobileNet activation to predict upto 8 different classes from the webcam defined by the user.

`index.html` can be opened directly inside a browser.

## About the Model
Using a pre-trained MobileNet mode, whose internal activation is used as the input to the new model being created.

The second model will take as input the output of the internal activation of the truncated MobileNet model and will predict probabilities for each of the selected output classes which can be Start, Stop or one the many Appliances. This is the model we'll actually train in the browser.

By doing so, we are reusing the features of MobileNet that can predict 1000 classes of ImageNet with a small amount of retraining.


## Prerequisites

* This app requires webcam.


## How to use the App

1. Open index.html in your browser.

2. Collect adequate samples for each of the required gestures by clicking on their icons.

3. Set the parameters for training the model such as Learning rate, Batch size, Number of Epochs and Number of Hidden Units in the top sequential model.

4. Click on Train button to train the model. Wait for sometime until the model is trained.

5. Once the model is trained you can either choose to test or download the model. Upon downloading the model, totally 3 files will be generated which are weights manifest file (model.json), the binary weights file(model-weights.bin) and labels.txt for the chosen gestures.
