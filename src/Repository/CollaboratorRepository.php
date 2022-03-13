<?php

namespace App\Repository;

use App\Entity\Collaborator;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Collaborator|null find($id, $lockMode = null, $lockVersion = null)
 * @method Collaborator|null findOneBy(array $criteria, array $orderBy = null)
 * @method Collaborator[]    findAll()
 * @method Collaborator[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CollaboratorRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Collaborator::class);
    }

    public function findAllByName() 
    {
        return $this->createQueryBuilder('c')
                    ->orderBy('c.name', 'ASC')
                    ->getQuery()
                    ->getResult();
    }

    public function findAllByDate() 
    {
        return $this->createQueryBuilder('c')
                    ->orderBy('c.updatedAt', 'DESC')
                    ->getQuery()
                    ->getResult();
    }
}
