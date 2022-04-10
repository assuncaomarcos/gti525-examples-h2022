const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

User = require('../models/user');

async function signup(req, res) {
    try {
        const { firstname, lastname, email, password } = req.body;

        // Pour vérifier si tous les champs ont été remplis
        if (!(email && password && firstname && lastname)) {
            return res.status(400).json({
                status: "erreur",
                message: "Tous les champs doivent être remplis"
            });
        }

        // Vérifier si l'utilisateur existe dans la base de données
        const oldUser = await User.findOne({ email });

        if (oldUser) {
            return res.status(400).json({
                status: "erreur",
                message: "L'utilisateur existe déjà. Veuillez vous connecter."
            });
        }

        // Chiffrer le mot de passe de l'utilisateur
        encryptedPassword = await bcrypt.hash(password, 10);

        // Create user in our database
        const user = await User.create({
            firstname,
            lastname,
            email: email.toLowerCase(),
            password: encryptedPassword,
        });

        // Création du jeton d'authentification
        const token = jwt.sign(
            { user_id: user._id, email },
            process.env.JWT_KEY,
            { expiresIn: "1h", }
        );

        // stocker le jeton
        user.token = token;
        await user.save();

        // return new user
        res.status(201).json({
            status: "succes",
            message: "L'utilisateur a été crée",
            data: user
        });
    } catch (err) {
        res.status(500).json({
            status: "erreur",
            message: error
        });
    }
}


async function login(req, res) {
    try {
        // obtient l'adresse courriel et le mot de passer à utiliser
        const { email, password } = req.body;

        // Validate user input
        if (!(email && password)) {
            res.status(400).json({
                status: "erreur",
                message: "Tous les champs doivent être remplis"
            });
        }

        // Vérifier si l'utilisateur existe dans la base de données
        const user = await User.findOne({ email });

        if (user && (await bcrypt.compare(password, user.password))) {

            // Création du jeton d'authentication
            const token = jwt.sign({ user_id: user._id, email },
                process.env.JWT_KEY,
                { expiresIn: "1h",}
            );

            // Sauvegarder le jeton
            user.token = token;
            await user.save();

            return res.status(200).json({
                status: "succes",
                message: "l'utilisateur est authentifié",
                data: {
                    "email" : user.email,
                    "token ": user.token
                }
            });
        }

        res.status(401).json({
            status: "erreur",
            message: "Informations d'identification invalides"
        });

    } catch (error) {
        res.status(500).json({
            status: "erreur",
            message: error
        });
    }
}

module.exports = {
    signup,
    login
}