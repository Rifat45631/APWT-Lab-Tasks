PGDMP  7    +                 }         
   examineeDB    17.4    17.4     ,           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false            -           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false            .           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false            /           1262    16387 
   examineeDB    DATABASE     r   CREATE DATABASE "examineeDB" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en-GB';
    DROP DATABASE "examineeDB";
                     postgres    false            �            1259    16388    details    TABLE     �   CREATE TABLE public.details (
    id integer NOT NULL,
    name character varying NOT NULL,
    age integer NOT NULL,
    institute character varying NOT NULL,
    region character varying NOT NULL
);
    DROP TABLE public.details;
       public         heap r       postgres    false            �            1259    16391    details_id_seq    SEQUENCE     �   CREATE SEQUENCE public.details_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.details_id_seq;
       public               postgres    false    217            0           0    0    details_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.details_id_seq OWNED BY public.details.id;
          public               postgres    false    218            �            1259    16401    user    TABLE     �   CREATE TABLE public."user" (
    id integer NOT NULL,
    email character varying NOT NULL,
    password character varying NOT NULL
);
    DROP TABLE public."user";
       public         heap r       postgres    false            �            1259    16400    user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.user_id_seq;
       public               postgres    false    220            1           0    0    user_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;
          public               postgres    false    219            �           2604    16392 
   details id    DEFAULT     h   ALTER TABLE ONLY public.details ALTER COLUMN id SET DEFAULT nextval('public.details_id_seq'::regclass);
 9   ALTER TABLE public.details ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    218    217            �           2604    16404    user id    DEFAULT     d   ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);
 8   ALTER TABLE public."user" ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    220    219    220            &          0    16388    details 
   TABLE DATA           C   COPY public.details (id, name, age, institute, region) FROM stdin;
    public               postgres    false    217   �       )          0    16401    user 
   TABLE DATA           5   COPY public."user" (id, email, password) FROM stdin;
    public               postgres    false    220          2           0    0    details_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.details_id_seq', 6, true);
          public               postgres    false    218            3           0    0    user_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.user_id_seq', 4, true);
          public               postgres    false    219            &   ;   x�3��LK,�42�ttrV��,K-*�,����/*��2�J��I��a���qqq ψx      )     x�e�Kr�0  �59�k�gѝ$4VDA���!b���;��3^�͓���-IYs*+��X��\��0Sҙ,͘�_U{ş�v���F�Ŭas�2�K=~�m5�����	��<�~p�	P��v�$�z���E�2
v��^ϥ�����$�H������7��,�e���"P��_�����pt�ܳv�]e��^�A���?b�B�8�-c��)�Є��I��k"H}?l��\	>�ST1�aU�cY�{�o2V߉�D7b|� �G#i�     