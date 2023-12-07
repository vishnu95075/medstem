const nurseCollectionRef = require('../models/notificationCollection');

// Create Medical Speciality
exports.addNotification = async (req, res) => {
    const data = req.body;

    try {
        const docRef = await nurseCollectionRef.add(data);
        res.status(201).send(
            {
                succes: true,
                id: docRef.id,
                message: 'Data created and saved successfully',
                data
            }
        );
    } catch (error) {
        console.error('Error saving data:', error);
        res.status(500).send('Internal Server Error');
    }
}

// Get All Medicaal Speciality
exports.getAllNotification = async (req, res) => {
    const data = [];
    await nurseCollectionRef.get()
        .then(snapshot => {
            if (snapshot.empty) {
                console.log('No Notification documents found in the collection.');
                res.status(200).send('No Notification documents found in the collection.');
                return;
            }

            snapshot.forEach(doc => {
                data.push({
                    id: doc.id,
                    data: doc.data(),
                });
            });

            // Now, allDocuments array contains the retrieved documents
            // console.log(data);
            res.status(200).send(data)
        })
        .catch(err => {
            console.error('Error getting documents', err);
        });
}

// Delete Medicaal Speciality By Id
exports.deleteNotification = async (req, res) => {
    const documentId = await req.params.id;

    const documentRef = nurseCollectionRef.doc(documentId);

    await documentRef.delete()
        .then(() => {
            res.status(200).send({
                succes: true,
                message: "Succesfully Deleted"
            })
        })
        .catch((error) => {
            console.error('Error deleting document:', error);
        });
}

// Update Medicaal Speciality By Id
exports.updateNotification = async (req, res) => {
    const documentId = await req.params.id;
    const data = req.body;
    const documentRef = nurseCollectionRef.doc(documentId);

    await documentRef.update(data)
        .then(() => {
            res.status(200).send({
                succes: true,
                message: "Succesfully Update",
                data
            })
        })
        .catch((error) => {
            console.error('Error Updating document:', error);
        });
}
