const doctorCollectionRef = require('../models/doctorCollections');

// Create Medicaal Speciality
exports.addDoctor = async (req, res) => {
    const data = req.body;
    try {
        const docRef = await doctorCollectionRef.add(data);
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
exports.getAllDoctor = async (req, res) => {
    const data = [];
    await doctorCollectionRef.get()
        .then(snapshot => {
            if (snapshot.empty) {
                console.log('No documents found in the collection.');
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
exports.deleteDoctor = async (req, res) => {
    const documentId = await req.params.id;

    const documentRef = doctorCollectionRef.doc(documentId);

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
exports.updateDoctor = async (req, res) => {
    const documentId = await req.params.id;
    const data = req.body;
    const documentRef = doctorCollectionRef.doc(documentId);

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
