import autores from "../models/Autor.js";

class autorController {
    static listarAutores = (req, res) => {
        autores.find((err, autores) => {
            res.status(200).send(autores);
        });
    }; 

    static listarAutorPorId = (req, res) => {
        const id = req.params.id;

        autores.findById(id, (err, autor) => {
            if(err) {
                return res.status(400).json({error: err.message, message: "usuario não encontrado"});
            };

            return res.status(200).json(autor);
        });
    };

    static cadastrarAutor = (req, res) => {
        const autor = new autores(req.body)

        autor.save((err) => {
            if(err) {
                return res.status(400).json({message: "Não foi possivel cadastrar este autor.", error: err.message});
            };

            return res.status(201).json(autor);
        });
    };
    
        static atualizarAutor = (req, res) => {
            const id = req.params.id;
        
            autores.findByIdAndUpdate(id, { $set: req.body },(err) => {
                if(err) {
                    return res.status(400).json({message: "Material não localizado", error: err.message});
                };

                return res.status(200).json({message: "O autor foi atualizado com sucesso."});
            });
        };

    static deletarAutor = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndDelete(id, (err) => {
            if(err) {
                return res.json({message: err.message})
            };

            return res.json({message: "Deletado com sucesso."})
        });
    };
};

export default autorController;