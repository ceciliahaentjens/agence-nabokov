<?php

namespace App\Controller;

use App\Entity\Collaborator;
use App\Form\CollaboratorType;
use App\Repository\CollaboratorRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CollaboratorController extends AbstractController
{
    /**
     * @var CollaboratorRepository
     */
    private $repository;

    public function __construct(CollaboratorRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * @Route("/les-collaborateurs", name="collaborator.index")
     */
    public function index(): Response
    {
        $collaborators = $this->repository->findAllByName();

        return $this->render('collaborator/index.html.twig', [
            'collaborators' => $collaborators
        ]);
    }
}
